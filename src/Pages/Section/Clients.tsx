import React from 'react'
import { useTranslation } from 'react-i18next'

const Clients = () => {
  const {t} = useTranslation();
  return (
    <div className='Clients'>
      <h1>{t("WHAT OUR CLIENTS SAY")}?</h1>
      <h5 className='fake_point' id='Client'></h5>
      {/* <p>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.
      </p> */}
      <div>
        <div>
          <img src="../image/Team.png" alt="" />
          <h1>Hasan Othman</h1>
          <p>{t("Its the best taxi app")}<br/> {t("in the world.")}</p>
        </div>
        <div>
          <img src="../image/Team.png" alt="" />
          <h1>Ahmad Kader</h1>
          <p>{t("Its so comfortable")}<br/> {t("and fast.")}</p>
        </div>
        <div>
          <img src="../image/Team.png" alt="" />
          <h1>Mohammad Saleh</h1>
          <p>{t("We save you a lot of time and the price suits everyone.")}</p>
        </div>
      </div>
    </div>
  )
}

export default Clients