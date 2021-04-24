import React from 'react';
import 'src/components/moleculas/Footer/index.scss';
function Footer() {
    return (
        <div className="footer d-flex justify-content-between align-items-center">
            <div className="container">
                <h1 className="mb-4 text-center font-weight-bold">Contacts us</h1>
                <p className="text-center">SULEYMAN DEMIREL UNIVERSITY {new Date().getFullYear()}</p>
                <p className="text-center mb-5">ул. Абылай хана 1/1, г.Каскелен</p>
                <p className="text-center">Телефон: +7 (775) 000-00-00</p>
                <p className="text-center mb-5">Факс: +7 (775) 000-00-00</p>
                <p className="text-center">info@stu.sdu.edu.kz</p>
                <i className="fab fa-vk"/>
            </div>
        </div>
    );
}

export default Footer;
