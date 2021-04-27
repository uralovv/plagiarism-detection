import React from 'react';
import Header from 'src/components/moleculas/Header';
import SingleSlider from '../components/moleculas/SingleSlider';
import { teamMates } from '../components/moleculas/SingleSlider/mock';
import Footer from '../components/moleculas/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faBook, faCog, faDesktop, faGem } from '@fortawesome/free-solid-svg-icons';

function IndexPage() {
  const { t } = useTranslation();
  const navClick = (key: string) => {
    const element = document.getElementById(key);
    element && element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  return (
      <div>
          <Header onNavClick={navClick}/>
          <div className="main-bg d-flex align-items-center justify-content-center">
              <div className="d-flex flex-column align-items-center px-5">
                <h1 className="text-center">PLAGIARISM DETECTOR</h1>
                <p className="text-center">{t('Powerful')}</p>
                <a href="https://github.com/SuleymanDemirelKazakhstan/final-project-kill-a-byte" className="click-me-button">{t('clickMe')}</a>
              </div>
          </div>
          <div className="position-relative">
            <div className="description-main container position-relative">
                <div className="d-flex justify-content-center">
                    <div className="description py-5 pb-5">
                        {/* tslint:disable-next-line:max-line-length */}
                        <h1 className="text-center mb-5 font-weight-bold">{t('Plagiarism Detector')}</h1>
                        <p className="text-center">{t('aboutProject')}</p><br/>
                        <h1 className="text-center mt-3 mb-3 font-weight-bold">{t('Our features')}</h1>
                        <p className="text-center mb-5">
                            {t('everydayWeWork')}
                        </p>
                        <div className="row">
                            <div className="col-md-3 mb-5 d-flex flex-column align-items-center">
                                <FontAwesomeIcon className="mb-5" size="4x" icon={faDesktop} />
                                <p className="text-center mb-4">
                                    {t('Easy to use')}
                                </p>
                                <p className="text-center">
                                    {t('Convenient interface')}
                                </p>
                            </div>
                            <div className="col-md-3 mb-5 d-flex flex-column align-items-center">
                                <FontAwesomeIcon className="mb-5" size="4x" icon={faBook} />
                                <p className="text-center mb-4">
                                    {t('Multilingual')}
                                </p>
                                <p className="text-center">
                                    {t('This tool has')}
                                </p>
                            </div>
                            <div className="col-md-3 mb-5 d-flex flex-column align-items-center">
                                <FontAwesomeIcon className="mb-5" size="4x" icon={faGem} />
                                <p className="text-center mb-4">
                                    {t('Multiple document formats')}
                                </p>
                                <p className="text-center">
                                    {t('This tool can work')}
                                </p>
                            </div>
                            <div className="col-md-3 mb-5 d-flex flex-column align-items-center">
                                <FontAwesomeIcon className="mb-5" size="4x" icon={faCog} />
                                <p className="text-center mb-4">
                                    {t('Numerous Detection')}
                                </p>
                                <p className="text-center">
                                    {t('In addition, it can')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
                <div className="main-bg-2">
                    <div className="container py-4">
                        <h1 id="about" className="text-md-left text-md-left text-center mt-5 mb-3 font-weight-bold">{t('teamMembers')}</h1>
                        <SingleSlider items={teamMates} />
                    </div>
                    <div id="donate" className="donate">
                        <div className="container d-flex py-5">
                            <div className="row">
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                            <h1
                                className="mb-3 text-md-left text-center font-weight-bold text-wrap"
                            >
                                {t('howToSupport')}
                            </h1>
                            {/* tslint:disable-next-line:max-line-length */}
                            <p className="text-md-left text-center">{t('yourSupport')}</p>
                        </div>
                        <div className="col-md-6">
                            <iframe
                                title="kjdfh"
                                src="https://yoomoney.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=&default-sum=&button-text=12&comment=on&hint=&successURL=http%3A%2F%2Fgoogle.com%2F&quickpay=shop&account=4100116698428981"
                                width="100%" height="294" frameBorder="0" allowTransparency scrolling="no"/>
                        </div>
                        </div>
                        {/* tslint:disable-next-line:max-line-length */}
                        </div>
                    </div>
                    <div className="mt-5" id="contacts">
                        <Footer  />
                    </div>
                </div>

      </div>
  );
}

export default IndexPage;
