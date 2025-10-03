import "./Tarif.css";
import TarifImg from "../../assets/images/main-img.png";
import { useEffect, useState } from "react";
import { getDataCard } from "../../API/getCardData";
import { TarifCards } from "../TarifCards";
import { useSelector } from "react-redux";

export const Tarif = ({
  invalid,
  agree,
  onBuy,
  buyRef,
  checkboxRef,
  setAgree,
}) => {
  const [tariffs, setTariffs] = useState([]);
  const timeUp = useSelector((state) => state.countdown.timeUp);

  useEffect(() => {
    const fetchTariffs = async () => {
      const data = await getDataCard.getData();
      setTariffs(data);
    };
    fetchTariffs();
  }, []);

  return (
    <>
      {/* Image responsive */}
      <div className="tarif_inner_center_left flex justify-center sm:block">
        <img
          src={TarifImg}
          alt="Tarif img"
          className="w-[124px] h-[250px] sm:w-[480px] sm:h-[776px] object-contain"
        />
      </div>

      <div className="text-gray-100 py-12 w-full">
        <div className="mb-8">
          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
            role="list"
          >
            {/* Big card */}
            {tariffs.slice(3, 4).map((el) => (
              <li
                key={el.id}
                className="rounded-[35px] border-[#484D4E] border-2 
                           text-center w-full h-auto 
                           sm:col-span-3 sm:h-auto"
              >
                <label className="block cursor-pointer h-full">
                  <input type="radio" className="hidden peer" name="tariff" />
                  <article
                    className="relative rounded-[35px] p-4 sm:p-6 md:p-8 bg-[#313637] 
                                      border border-transparent peer-checked:border-[#FDB056] 
                                      transition h-full flex flex-col justify-between"
                  >
                    {!timeUp && (
                      <div className="absolute top-0 left-6 sm:left-10 bg-[#FD5656] text-white text-xs font-semibold px-2 py-1 rounded-md">
                        -70%
                      </div>
                    )}

                    <div className="absolute top-4 right-4 text-[#FDB056] text-sm font-semibold">
                      хит!
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 items-start sm:items-center">
                          <div className="w-full sm:w-[228px]">
                            <div className="font-extrabold text-[#FDB056] leading-none">
                              <h2 className="text-[18px] sm:text-[20px] text-white mb-1">
                                {el.period}
                              </h2>

                              {timeUp ? (
                                <span className="text-[32px] sm:text-[45px] text-white">
                                  {el.full_price} ₽
                                </span>
                              ) : (
                                <>
                                  <span className="text-[32px] sm:text-[45px] font-bold text-[#FDB056]">
                                    {el.price} ₽
                                  </span>
                                  <div className="text-[20px] sm:text-[25px] text-gray-400 font-semibold line-through mt-1">
                                    {el.full_price} ₽
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          <p className="text-left mt-3 sm:mt-4 text-gray-300 max-w-xl">
                            {el.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </label>
              </li>
            ))}

            {/* 3 ta oddiy card */}
            {tariffs.slice(0, 3).map((el) => (
              <TarifCards
                key={el.id}
                id={el.id}
                period={el.period}
                price={el.price}
                full_price={el.full_price}
                is_best={el.is_best}
                text={el.text}
              />
            ))}
          </ul>
        </div>

        {/* Info box */}
        <div className="w-full sm:w-[500px] mb-6 p-4 rounded-[15px] bg-[#2D3233] text-gray-300 flex items-start gap-3">
          <div className="text-[#FDB056] font-semibold">!</div>
          <div className="text-sm">
            Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
            результат, чем за 1 месяц
          </div>
        </div>

        {/* Checkbox + button */}
        <div className="flex flex-col items-start gap-4">
          <label
            className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer transition ${
              invalid ? "ring-2 " : ""
            }`}
          >
            <input
              ref={checkboxRef}
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="w-4 h-4 accent-[#FDB056]"
              aria-invalid={invalid}
            />
            <span className="text-sm text-gray-200">
              Я согласен с{" "}
              <span className="underline">
                офертой рекуррентных платежей и Политикой <br />
                конфиденциальности{" "}
              </span>
            </span>
          </label>

          <button
            ref={buyRef}
            onClick={onBuy}
            disabled={timeUp}
            className={`w-full sm:w-auto px-6 sm:px-[137px] py-[16px] sm:py-[20px] rounded-[15px] cursor-pointer font-semibold transition ${
              timeUp
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-[#FDB056] text-black hover:bg-[#fda83d]"
            }`}
          >
            {timeUp ? "Время вышло" : "Купить"}
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500 max-w-prose">
          Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
          денежных средств для получения пожизненного доступа к приложению.
          Пользователь соглашается, что данные кредитной/дебетовой карты будут
          сохранены для осуществления покупок дополнительных услуг сервиса в
          случае желания пользователя.
        </p>
      </div>
    </>
  );
};
