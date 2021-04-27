import React from 'react';
import 'src/components/moleculas/Footer/index.scss';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faVk, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  const { t } = useTranslation();
  return (
        <div className="footer d-flex justify-content-between align-items-center">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="mb-4 text-center font-weight-bold">{t('contacts')}</h1>
                <p className="text-center">SULEYMAN DEMIREL UNIVERSITY {new Date().getFullYear()}</p>
                <p className="text-center mb-5">{t('sduAdress')}</p>
                <p className="text-center">{t('phone')}: +7 (775) 000-00-00</p>
                <p className="text-center mb-5">{t('fax')}: +7 (775) 000-00-00</p>
                <p className="text-center">info@stu.sdu.edu.kz</p>
                <div>
                    <a className="social-links" href="https://vk.com/sdukz">
                        <FontAwesomeIcon className="mr-3" size="1x" icon={faVk} />
                    </a>
                    <a className="social-links" href="https://ru-ru.facebook.com/sdukz">
                        <FontAwesomeIcon className="mr-3" size="1x" icon={faFacebook} />
                    </a>
                    <a className="social-links" href="https://twitter.com/sdukz">
                        <FontAwesomeIcon className="mr-3" size="1x" icon={faTwitter} />
                    </a>
                    <a className="social-links" href="https://www.instagram.com/sdukz/">
                        <FontAwesomeIcon className="mr-3" size="1x" icon={faInstagram} />
                    </a>
                    <a className="social-links" href="https://www.youtube.com/channel/UCAfCFHbt7ooyttq75uC0FuA">
                        <FontAwesomeIcon size="1x" icon={faYoutube} />
                    </a>
                </div>
            </div>
        </div>
  );
}

export default Footer;
