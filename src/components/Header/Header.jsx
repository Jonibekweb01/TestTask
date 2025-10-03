import Star from "../../assets/images/Star-3.svg";

import "./Header.css";

export default function Header({ fmt, WARNING, remaining }) {
  return (
    <header className="inset-x-0 top-0 z-50 bg-white border-b border-gray-200 p-[10px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-auto flex flex-col sm:flex-col sm:items-center sm:justify-between gap-2 sm:gap-0">
          <p className="text-white font-semibold text-[16px] sm:text-[18px] leading-[130%] text-center sm:text-left">
            Успейте открыть пробную неделю
          </p>
          <div className="flex items-center justify-center gap-3">
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
              className={`text-[18px] sm:text-[20px] min-w-[72px] text-center px-3 py-1 rounded-md transition
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
        </div>
      </div>
    </header>
  );
}
