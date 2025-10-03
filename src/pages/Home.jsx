import React from "react";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";

import {
  startCountdown,
  stopCountdown,
} from "../features/countdown/countdownSlice";
import { Tarifs } from "../components/Tarifs";
import { useEffect, useRef, useState } from "react";

export const Home = () => {
  const WARNING = 30;

  const dispatch = useDispatch();
  const remaining = useSelector((s) => s.countdown.remaining);
  const timeUp = useSelector((s) => s.countdown.timeUp);

  const [agree, setAgree] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const buyRef = useRef(null);
  const checkboxRef = useRef(null);

  useEffect(() => {
    dispatch(startCountdown());

    return () => {
      dispatch(stopCountdown());
    };
  }, []);

  const fmt = (s) => {
    const m = Math.floor(s / 60),
      sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const onBuy = () => {
    if (timeUp) return;
    if (!agree) {
      setInvalid(true);
      if (buyRef.current) {
        buyRef.current.classList.remove("animate-shake");
        buyRef.current.offsetWidth;
        buyRef.current.classList.add("animate-shake");
      }
      checkboxRef.current?.focus();
      setTimeout(() => setInvalid(false), 2200);
      return;
    }
    // real purchase logic goes here
    alert("Покупка подтверждена");
  };
  return (
    <>
      <Header
        invalid={invalid}
        timeUp={timeUp}
        agree={agree}
        onBuy={onBuy}
        buyRef={buyRef}
        checkboxRef={checkboxRef}
        fmt={fmt}
        WARNING={WARNING}
        remaining={remaining}
        setAgree={setAgree}
      />
      <Tarifs
        invalid={invalid}
        timeUp={timeUp}
        agree={agree}
        onBuy={onBuy}
        buyRef={buyRef}
        checkboxRef={checkboxRef}
        fmt={fmt}
        WARNING={WARNING}
        remaining={remaining}
        setAgree={setAgree}
      />
    </>
  );
};
