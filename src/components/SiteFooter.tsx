import React from "react";
import '../styles/site-footer.scss';
import footerNB from '../assets/images/footerNB.png';

const Footer: React.FC = () => {
    return (
        <div id="site-footer">
            <div id="footer-logo">
                <img src={footerNB}/>
            </div>
        </div>
    );
}

export default Footer;
