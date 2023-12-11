import React from 'react'
import { useTranslation } from 'react-i18next'

const Download = () => {
    const {t} = useTranslation()

    return (
        <div className='Download'>
            <h5 className='fake_point' id='Download'></h5>
            <span>
                <img src="../image/DownloadImage.png" alt="DownloadImage" />
            </span>
            <div>
               <span>
                 <h2>E Taxi</h2>
                <h1> {t("GET THE APP")}
                    </h1>
               </span>
                <p>
                {t("You can now download our app on Android and iOS.Never be stranded with Rayan Taxi, book your cab from wherever you are, for as many of you as there are.")}
                </p>
                <h6>
                    {t("Download E Taxi on iphone & Android market places.")}
                </h6>
                <div>
                    <a href='https://www.apple.com/app-store/'><img src="assets/images/icons/app-store.png" alt="Apple" /></a>
                    <a href='https://play.google.com/store/games' className='second_image'><img src="assets/images/icons/google-play.png" alt="Google" /></a>
                </div>
            </div>
        </div>
    )
}

export default Download