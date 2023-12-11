import React from 'react'
import { BsFillCaretLeftSquareFill } from 'react-icons/bs'
import { FaVanShuttle } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Cars = () => {
  const {t} = useTranslation()

  return (
    <div className='Cars'>
      <h5 className='fake_point' id='Cars'></h5>
        <span>
          <h2>{t("CAR CLASSES AND RATES")}</h2>
        <h1>{t("CHOOSE YOUR CAR")}</h1>
        </span>
        <div>
          <div>
            <div className='car_icon'><FaCarSide/></div>
            <h1>{t("Economy")}</h1>
            {/* nomy Class */}
            <p>
            {t("The hybrid vehicles bring you to your destination in no time and at an attractive price.")}
            </p>
            <strong>$2.5/mi</strong>
          </div>
          <div>
            <div className='car_icon'><IoCarSport/></div>
            <h1>{t("Limo")}</h1>
            <p>
            {t("An “oldie but a goodie”, the comfortable Mercedes.")}
            </p>
            <strong>$7.5/mi</strong>
          </div>
          <div>
            <div className='car_icon'><FaVanShuttle/></div>
            <h1>{t("Van")}</h1>
            <p>
              {t("Convenient for groups, especially when the fare is shared.")}
            </p>
            <strong>$12.5/mi</strong>
          </div>
        </div>
    </div>
  )
}

export default Cars