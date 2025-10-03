import React from "react";
import { Tarif } from "./Tarif/Tarif";
import { Guarantee } from "./Guarantee";

export const Tarifs = ({
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
}) => {
  return (
    <>
      <section className="tarif bg-[#232829] pt-[50px] pb-[150px]">
        <div className="container max-w-[1216px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tarif_inner">
            <div className="tarif_inner_top mb-[80px]">
              <h1 className="text-white font-semibold text-[28px] leading-[130%] tracking-[0px]">
                Выбери подходящий для себя{" "}
                <span className="text-[#FDB056]">тариф</span>
              </h1>
            </div>
            <div className="tarif_inner_center flex justify-between items-center gap-[30px]">
              <Tarif
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
            </div>
            <div className="tarif_inner_bottom">
              <Guarantee />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
