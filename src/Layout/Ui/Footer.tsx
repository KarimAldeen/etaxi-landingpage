import React from 'react'
import FooterLogo from '../../svg/FooterLogo'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();

  return (
   <div className='Footer'>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 Log_dev">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 company_name" />
              {t("Company name")}:
            </h6>
            <div className='footer_logo'>
              <div className='logo'>
                <FooterLogo/>
              </div>
              <div className='best_partner'>
                <div className='first'>{t("sdn company")}</div>
                <div className='second'>{t("Your Best Partner")}</div>
              </div>
            </div>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">{t("Useful links")}</h6>
            <p>
              <a href="#Offer" className="text-reset">
                {t("Offer")}
              </a>
            </p>
            <p>
              <a href="#Download" className="text-reset">
              {t("Download")}
              </a>
            </p>
            <p>
              <a href="#Client" className="text-reset">
              {t("Client")}
              </a>
            </p>
            <p>
              <a href="#Drivers" className="text-reset">
              {t("Driver")}
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">{t("Contact")}</h6>
            <p>
              <i className="fas fa-home " /> Syria-Qatar-Oman
            </p>
            <p>
              <i className="fas fa-envelope " />
              Info@Sdnone.Com
                          </p>
            <p>
              <i className="fas fa-phone " /> +974 77280008
            </p>
            <p>
              <i className="fas fa-print " /> +963 966338669
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      {/* © SDNone company.  */}
      <a className="text-reset fw-bold" href="https://www.sdnone.net/">
      © {t("SDNone company.  all rights reserved")}
            </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</div>

  )
}

export default Footer