import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsFillArrowUpLeftSquareFill } from 'react-icons/bs'
import { MdOutlineChevronRight } from "react-icons/md";
import {motion} from 'framer-motion'
const Drivers = () => {
  const {t} = useTranslation()

  return (
    <motion.div 
    whileInView={{
      scale:[0.8,1.07,1],
     opacity:[0,0.4,0.6,1]
    }}
   
    transition={{
      duration:1
    }}
    className='Drivers'>
      <h5 className='fake_point' id='Driver'></h5>
      <div>
        <h4>{t("For Drivers")}</h4>
        <h1>{t("DO YOU WANT TO EARN WITH US")}?
          </h1>
        <p>
       <MdOutlineChevronRight/> {t("Free work schedule.")}<br/>
       <MdOutlineChevronRight/> {t("Absence of mandatory orders.")}<br/>
       <MdOutlineChevronRight/> {t("Lack of introductory payments")}.<br/>
       <MdOutlineChevronRight/> {t("We accept all types of vehicles")}:<br/>
        </p>
        <div>
          <div>
            <div>
              <BsFillArrowUpLeftSquareFill />
              {t("Luxury")} 
            </div>
            <div>
              <BsFillArrowUpLeftSquareFill />
              {t("Economy")}
            </div>
            <div>
              <BsFillArrowUpLeftSquareFill />
              {t("Standard")} 
            </div>
          </div>
          <div>
            <div>
              <BsFillArrowUpLeftSquareFill />
              {t("Minicvan")} 
            </div>
            <div>
              <BsFillArrowUpLeftSquareFill />
              {t("Truck")}
            </div>
            <div>
              <BsFillArrowUpLeftSquareFill />
              {t("Courier")}
            </div>
          </div>
        </div>
        <button>{t("BECOME DRIVER")}</button>
      </div>
      <span><img src="../image/Location.png" alt="" /></span>
    </motion.div>
  )
}

export default Drivers