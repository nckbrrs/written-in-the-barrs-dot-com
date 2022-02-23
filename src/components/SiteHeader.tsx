import React from "react";
import '../styles/site-header.scss';

const Header: React.FC = () => {
    return (
        <div id="site-header" onClick={() => window.location.href = "/"}>
            <p>NICK <span>&</span> BROOKE</p>
            <p>06.24.2022</p>
        </div>
    );
}

export default Header;
