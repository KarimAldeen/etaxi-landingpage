import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const {t} = useTranslation()
  return (
    <div className='Hero' id='Home'>
        <img src="../image/HeroImage.svg" alt="" />
        <div className='Hero_text'>
            <h1>{t("We are")}</h1>
            <h2>{t("THE BEST")}</h2>
            <h1>{t("in the Town")}</h1>
        </div>
    </div>
  )
}

export default Hero