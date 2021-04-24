import React from 'react';
import Header from 'src/components/moleculas/Header';
import SingleSlider from '../components/moleculas/SingleSlider';
import { teamMates } from '../components/moleculas/SingleSlider/mock';
import Footer from '../components/moleculas/Footer';
function IndexPage() {
  const navClick = (key: string) => {
    const element = document.getElementById(key);
    element && element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  return (
      <div>
          <Header onNavClick={navClick}/>
          <div className="main-bg d-flex align-items-center justify-content-center">
              <h1 className="text-center">ANTIPLAGIAT</h1>
          </div>
          <div className="position-relative">
            <div className="description-main container position-relative">
                <div className="d-flex justify-content-center">
                    <div className="description py-5 pb-5">
                        {/* tslint:disable-next-line:max-line-length */}
                        <h1 className="text-center mb-5 font-weight-bold">Plagiarism
                            Detector</h1>

                        A program that shows how similar documents are to each other

                        A program that shows how similar documents are to each other. A program that shows how similar documents are to each other. A program that shows how similar documents are to each other. A program that shows how similar documents are to each other. A program that shows how similar documents are to each other

                        A program that shows how similar documents are to each other. A program that shows how similar documents are to each other. A program that shows how similar documents are to each other
                    </div>
                </div>
            </div>
          </div>
                <div className="main-bg-2">
                    <div className="container py-4">
                        <h1 id="about" className="mt-5 mb-3 font-weight-bold">Team members</h1>
                        <SingleSlider items={teamMates} />
                        <div id="donate" className="donate d-flex pt-5">
                            <div className="w-50 py-3 px-5">
                                <h1 className="mb-3 font-weight-bold text-wrap">How you can support us</h1>
                                <p>Your support is what makes it possible to develop our product and make the world a better.</p>
                                <button className="showButton">{'SHOW QR CODE'}</button>
                            </div>

                            <iframe
                                title="kjdfh"
                                src="https://yoomoney.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=&default-sum=&button-text=12&comment=on&hint=&successURL=http%3A%2F%2Fgoogle.com%2F&quickpay=shop&account=4100116698428981"
                                width="423" height="294" frameBorder="0" allowTransparency scrolling="no"/>
                            {/* tslint:disable-next-line:max-line-length */}
                        </div>

                    </div>
                    <div id="contacts">
                        <Footer  />
                    </div>
                </div>

      </div>
  );
}

export default IndexPage;
