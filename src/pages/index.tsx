import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react';
import Header from 'src/components/moleculas/Header';
import SingleSlider from '../components/moleculas/SingleSlider';
import { teamMates } from '../components/moleculas/SingleSlider/mock';
import Footer from '../components/moleculas/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faBook, faCog, faDesktop, faGem, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useAction, useAtom } from '@reatom/react';
import { actions, atoms } from '../store/compare';
import { is } from 'remote-data-ts';
import { ComparedDocument } from '../store/compare/types/ComparedDocument';

function IndexPage() {
  const { t } = useTranslation();
  const [score, setScore] = useState<string | undefined>(   undefined);
  const [loading, setLoading] = useState(false);
  const [scoreResult, setScoreResults] = useState<ReadonlyArray<ComparedDocument> | undefined>([]);
  const navClick = (key: string) => {
    const element = document.getElementById(key);
    element && element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

    // tslint:disable-next-line:ter-arrow-parens
  const getCompareByScoreRequest = useAction((score: string) => actions.getCompareByScoreRequest({ score }));
  const getCompareByScoreState = useAtom(atoms.compareByScore);

  const onScoreChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    setScore(event.target.value.replace(/\D/, ''));
  },                                                                      []);

  const onCheckScore = useCallback(() => {
    score && getCompareByScoreRequest(score);
  },                               [getCompareByScoreRequest, score]);

  useEffect(() => {
    if (is.success(getCompareByScoreState)) {
      getCompareByScoreState.data
      && setScoreResults(getCompareByScoreState.data);
    } else if (is.failure(getCompareByScoreState)) {
      setScoreResults([]);
    }
    setLoading(is.loading(getCompareByScoreState));
  },        [getCompareByScoreState, score]);

  return (
      <div>
          <Header onNavClick={navClick}/>
          <div className="main-bg d-flex align-items-center justify-content-center">
              <div className="d-flex flex-column align-items-center px-5">
                <h1 className="text-center">PLAGIARISM DETECTOR</h1>
                <p className="text-center">{t('Powerful')}</p>
              <input
                  className="mb-3 d-md-block d-none"
                  value={score}
                  type="text"
                  pattern="[0-9]*"
                  onChange={onScoreChange}
              />
              <button
                  disabled={!score}
                  onClick={onCheckScore}
                  className="d-md-block d-none click-me-button mb-3"
              >
                  {t('check')}
              </button>
              </div>
          </div>
          <div className="position-relative">
            <div className="description-main container position-relative">
                <div className="d-md-block d-none">
                {loading ? (
                    <div className="d-flex justify-content-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>) : (
                        scoreResult && scoreResult.length > 0 ? (
                        <div className="pt-5">
                            <table className="main-table w-100">
                                <thead className="main-table_header">
                                <tr>
                                    <th>№</th>
                                    <th>{t('stDocument')}</th>
                                    <th>{t('ndDocument')}</th>
                                    <th>{t('percentage')}</th>
                                </tr>
                                </thead>
                                <tbody className="main-table_body">
                                {scoreResult.map((row, i) => {
                                  return (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{row.First_document}</td>
                                            <td>{row.Second_documents}</td>
                                            <td>{row.Plagiarism_Score}</td>
                                        </tr>
                                  );
                                })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        is.failure(getCompareByScoreState) ? (
                            <div className="d-flex flex-column align-items-center pt-5">
                                <FontAwesomeIcon className="mb-2" size="2x" icon={faExclamationTriangle} />
                                <p className="my-2 text-center typography__variant-text">
                                    {t('tryAgain')}
                                </p>
                            </div>
                        ) : (
                            !is.notAsked(getCompareByScoreState) && scoreResult?.length === 0 &&
                            (<div className="d-flex flex-column align-items-center pt-5">
                                <p className="my-2 text-center typography__variant-text">
                                    {t('noResults')}
                                </p>
                            </div>)
                        ))
                )}
                </div>
                <div className="d-flex justify-content-center">
                    <div className="description py-5 pb-5">
                        {/* tslint:disable-next-line:max-line-length */}
                        <h1 className="text-center mb-5 font-weight-bold">{t('Plagiarism Detector')}</h1>
                        <p className="text-center">{t('aboutProject')}</p><br/>
                        <div className="d-flex justify-content-center pt-2 pb-4">
                        <a href="https://github.com/SuleymanDemirelKazakhstan/final-project-kill-a-byte" className="click-me-button-br">{t('clickMe')}</a>
                        </div>
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
