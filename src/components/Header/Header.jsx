import Star from "../../assets/images/Star-3.svg";

import "./Header.css";

export default function Header({
  fmt,
  WARNING,
  remaining,
  invalid,
  timeUp,
  agree,
  onBuy,
  buyRef,
  checkboxRef,
  setAgree,
}) {
  return (
    <header className="inset-x-0 top-0 z-50 bg-white border-b border-gray-200 p-[10px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex flex-col items-center justify-between">
          <p className="text-white font-semibold text-[18px] leading-[130%] tracking-[0px]">
            Успейте открыть пробную неделю
          </p>
          <div className="flex items-center gap-3">
            <img
              width={14}
              height={14}
              src={Star}
              alt="star"
              className="w-5 h-5"
            />
            <div
              role="status"
              aria-live="polite"
              className={`text-[20px] min-w-[72px] text-center px-3 py-1 rounded-md transition
                ${
                  remaining <= WARNING && remaining > 0
                    ? "text-red-700 animate-pulse-scale font-bold"
                    : "text-yellow-300"
                }
              `}
            >
              {fmt(remaining)}
            </div>
            <img
              width={14}
              height={14}
              src={Star}
              alt="star"
              className="w-5 h-5"
            />
          </div>
          <div style={{ display: "none" }}>
            <label
              className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer focus:outline-none ${
                invalid ? "ring-2 ring-red-300 bg-red-50" : ""
              }`}
            >
              <input
                ref={checkboxRef}
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4"
                aria-invalid={invalid}
              />
              <span className="text-sm text-gray-700">
                Согласен с условиями
              </span>
            </label>
            <button
              ref={buyRef}
              onClick={onBuy}
              disabled={timeUp}
              className={`px-4 py-2 rounded-md font-semibold text-white ${
                timeUp
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {timeUp ? "Время вышло" : "Купить"}
            </button>{" "}
            <label
              className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer focus:outline-none ${
                invalid ? "ring-2 ring-red-300 bg-red-50" : ""
              }`}
            >
              <input
                ref={checkboxRef}
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4"
                aria-invalid={invalid}
              />
              <span className="text-sm text-gray-700">
                Согласен с условиями
              </span>
            </label>
            <button
              ref={buyRef}
              onClick={onBuy}
              disabled={timeUp}
              className={`px-4 py-2 rounded-md font-semibold text-white ${
                timeUp
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {timeUp ? "Время вышло" : "Купить"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
