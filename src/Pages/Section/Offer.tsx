import React from 'react'
import { BsFillBadgeArFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { PiCarBold } from "react-icons/pi";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";

const Offer = () => {
  const {t} = useTranslation()

  return (
    <div className='Offer'>
      <h5 className='fake_point' id='Offer'></h5>
      <div>
        <h2> {t("WHAT WE OFFER")} </h2>
        <h1> {t("WELCOME TO US")} </h1>
      </div>
      <div>
        <p>
          Lorem Ipsum is that it has a more-or-less normal distribution
          of letters, as opposed to using 'Content here, content here',
          making it look like readable English.
        </p>
      </div>
      <span>
        <div>
          <PiCarBold />
          <h3>{t("Request your ride")}</h3>
          <p>{t("Select from a wide range of options and get a ride in minutes or schedule one for later.")}</p>
        </div>
        <div style={{marginTop:"-.2vw"}}>
          <TbDeviceMobileMessage />
          <h3>{t("PAY with options")}</h3>
          <p>{t("Cash, card, or ETaxi credits, we’ve got you covered, Choose from multiple payment methods.")}</p>
        </div>
        <div>
          <FaMapLocationDot />

          <h3>{t("TRACK YOUR RIDE")}</h3>
          <p>{t("From the moment your Captain is assigned till you get to your destination, track your ride in real time or share your details with your loved ones.")}</p>
        </div>
        {/* <div>
          <BsFillBadgeArFill />

          <h3>Taxi Tours</h3>
          <p>Lorem Ipsum is that it has a more-or- of letters</p>
        </div> */}
      </span>
    </div>

  )
}

export default Offer