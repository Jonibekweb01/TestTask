import React from "react";

export const Guarantee = () => {
  return (
    <div
      className="
        border border-[#484D4E] guarantee 
        mt-[40px] sm:mt-[60px] lg:mt-[80px] 
        text-left 
        w-full lg:w-[1156px] 
        p-4 sm:p-6 lg:p-[20px] 
        rounded-[10px]
      "
    >
      <span
        className="
          text-[14px] sm:text-[16px] lg:text-[18px] 
          mb-[20px] sm:mb-[25px] lg:mb-[30px] 
          inline-block text-[#81FE95] 
          px-4 sm:px-6 lg:px-[30px] 
          py-2 sm:py-3 lg:py-[16px] 
          border border-[#81FE95] 
          rounded-full
        "
      >
        гарантия возврата 30 дней
      </span>
      <p className="text-[13px] sm:text-[14px] lg:text-[16px] text-[#DCDCDC] leading-relaxed">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые
        результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
        деньги в течение 30 дней с момента покупки, если ты не получишь видимых
        результатов.
      </p>
    </div>
  );
};
