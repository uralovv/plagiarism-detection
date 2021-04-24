import React from 'react';
import 'src/components/moleculas/Footer/index.scss';
import { useTranslation } from 'react-i18next';
function Footer() {
  const { t } = useTranslation();
  return (
        <div className="footer d-flex justify-content-between align-items-center">
            <div className="container">
                <h1 className="mb-4 text-center font-weight-bold">{t('contacts')}</h1>
                <p className="text-center">SULEYMAN DEMIREL UNIVERSITY {new Date().getFullYear()}</p>
                <p className="text-center mb-5">{t('sduAdress')}</p>
                <p className="text-center">{t('phone')}: +7 (775) 000-00-00</p>
                <p className="text-center mb-5">{t('fax')}: +7 (775) 000-00-00</p>
                <p className="text-center">info@stu.sdu.edu.kz</p>
                <i className="fab fa-vk"/>
            </div>
        </div>
  );
}

export default Footer;
