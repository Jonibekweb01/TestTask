import { createSlice } from "@reduxjs/toolkit";

let intervalId = null;

const START = 120;

const slice = createSlice({
  name: "countdown",
  initialState: {
    remaining: START,
    running: false,
    timeUp: false,
  },
  reducers: {
    start(state) {
      state.running = true;
      state.timeUp = false;
    },
    tick(state) {
      state.remaining = Math.max(0, state.remaining - 1);
    },
    stop(state) {
      state.running = false;
    },
    reset(state, action) {
      state.remaining = action.payload ?? START;
      state.running = false;
      state.timeUp = false;
    },
    setTimeUp(state) {
      state.timeUp = true;
      state.running = false;
      state.remaining = 0;
    },
  },
});

export const { start, tick, stop, reset, setTimeUp } = slice.actions;

export default slice.reducer;

export const startCountdown = () => (dispatch, getState) => {
  const { countdown } = getState();
  if (countdown.running) return;

  dispatch(start());

  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  intervalId = setInterval(() => {
    const { countdown: s } = getState();
    if (s.remaining <= 1) {
      clearInterval(intervalId);
      intervalId = null;
      dispatch(setTimeUp());
      return;
    }
    dispatch(tick());
  }, 1000);
};

export const stopCountdown = () => (dispatch) => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  dispatch(stop());
};

export const resetCountdown =
  (seconds = START) =>
  (dispatch) => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    dispatch(reset(seconds));
  };
