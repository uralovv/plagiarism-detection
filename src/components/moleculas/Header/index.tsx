import React from 'react';
import { HeaderTypes } from './types';
import 'src/components/moleculas/Header/index.scss';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

function Header(props: HeaderTypes.IProps) {
  const { t, i18n } = useTranslation();
  const { onNavClick } = props;
  const onClickNav = (id: string) => () => {
    onNavClick(id);
  };
  return (
      <div className="header">
          <div className="container py-4 d-flex justify-content-between align-items-center">
              <p id="about" className="logo fw-800 mb-0">Plagiarism Detector</p>
              <div className="right-nav d-flex">
                  <div className="d-md-flex  d-none">
                      <p className="mr-3 mb-0" onClick={onClickNav('about')}>{t('aboutUs')}</p>
                      <p className="mr-3 mb-0" onClick={onClickNav('contacts')}>{t('contacts')}</p>
                      <p className="mr-5 mb-0" onClick={onClickNav('donate')}>{t('donate')}</p>
                  </div>
                  <button
                      className={clsx('lang-button px-2', i18n.language === 'en' && 'active-button')}
                      onClick={() => i18n.changeLanguage('en')}
                  >
                      EN
                  </button>
                  <button
                      className={clsx('lang-button px-2 mx-2', i18n.language === 'ru' && 'active-button')}
                      onClick={() => i18n.changeLanguage('ru')}
                  >
                      RU
                  </button>
                  <button
                      className={clsx('lang-button px-2', i18n.language === 'kk' && 'active-button')}
                      onClick={() => i18n.changeLanguage('kk')}
                  >
                      KK
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Header;
