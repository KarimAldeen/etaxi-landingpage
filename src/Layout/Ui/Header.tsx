import React from 'react'
import { IoMenu } from "react-icons/io5";
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Button } from 'antd'
import Translate from '../../Components/Utils/Translate'
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion'
const Header = () => {
  const {t} = useTranslation();
  return (
    <motion.div className='Header'>
      <div>
        <img className='Logo' src="../image/etaxlogo.svg" alt="Logo" />
      </div>
      <div className='Links none'>
        <a href="#Home">{t("Home")}</a>
        <a href="#Offer">{t("Offer")}</a>
        <a href="#Download">{t("Download")}</a>
        {/* <a href="#Cars">{t("Cars")}</a> */}
        <a href="#Driver">{t("Drivers")}</a>
        <a href="#Client">{t("Client")}</a>
      </div>
      <div>
        {/* <button className='none'>
          sign in
        </button> */}
        <div>
          <Translate/>
        </div>
        <div className='Header_Menu'>

          <WithDrawer
            button={<Button type="primary"> <IoMenu /></Button>}
            title='HomeLinks'
          //  width="200"
          >
            <div className='Links '>
            <a href="#Home">{t("Home")}</a>
            <a href="#Offer">{t("Offer")}</a>
            <a href="#Download">{t("Download")}</a>
            {/* <a href="#Cars">{t("Cars")}</a> */}
            <a href="#Driver">{t("Drivers")}</a>
            <a href="#Client">{t("Client")}</a>
            </div>
          </WithDrawer>
        </div>
      </div>
    </motion.div>
  )
}

export default Header