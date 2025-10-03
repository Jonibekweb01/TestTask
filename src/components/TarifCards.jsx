import { useSelector } from "react-redux";

export const TarifCards = ({ id, period, price, full_price, text }) => {
  const timeUp = useSelector((state) => state.countdown.timeUp);

  return (
    <li
      key={id}
      className="text-center rounded-[35px]  bg-[#313637] w-[230px] h-[335px] flex items-stretch"
    >
      <label className="block cursor-pointer w-full">
        <input type="radio" className="hidden peer" name="tariff" />

        <div className="relative rounded-[35px] p-6 bg-[#313637] border-[#484D4E] border-2 peer-checked:border-[#FDB056] transition h-full flex flex-col justify-between">
          {!timeUp && (
            <div className="absolute -top-0 left-8 bg-[#FD5656] text-white text-xs font-semibold px-2 py-1 rounded-md">
              -50%
            </div>
          )}

          <div className="mt-4">
            <div className="text-sm text-gray-300">
              <span className="text-[28px]">{period}</span>
            </div>

            <div className="mt-4">
              {timeUp ? (
                <div className="font-extrabold text-white text-[45px]">
                  {full_price} ₽
                </div>
              ) : (
                <>
                  <div className="font-extrabold text-white text-[45px]">
                    <span className="font-semibold">{price} ₽</span>
                  </div>
                  <div className="text-[25px] text-gray-500 line-through mt-1">
                    <span className="font-semibold">{full_price} ₽</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <p className="mt-4 text-sm text-left text-gray-300">{text}</p>
        </div>
      </label>
    </li>
  );
};
