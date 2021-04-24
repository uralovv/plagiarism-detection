import React from 'react';
import { HeaderTypes } from './types';
import 'src/components/moleculas/Header/index.scss';
function Header(props: HeaderTypes.IProps) {
  const { onNavClick } = props;
  const onClickNav = (id: string) => () => {
    onNavClick(id);
  };
  return (
      <div className="header">
          <div className="container py-4 d-flex justify-content-between align-items-center">
              <h5 id="about" className="fw-800 mb-0">Plagiarism Detector</h5>
              <div className="right-nav d-flex">
                  <p className="mr-3 mb-0" onClick={onClickNav('about')}>About us</p>
                  <p className="mr-3 mb-0" onClick={onClickNav('contacts')}>Contacts</p>
                  <p className="mr-3 mb-0" onClick={onClickNav('donate')}>Donate</p>
              </div>
          </div>
      </div>
  );
}

export default Header;
