import React from "react";
import '../styles/site-header.scss';
import useWindowSize from "../assets/useWindowSize";
import { WindowSizes } from "../types/types";

const Header: React.FC = () => {
    const windowSize: WindowSizes = useWindowSize();

    const redirectToHome = () => {
        window.location.href = "/";
    }

    return (
        <div id="site-header" className={windowSize} onClick={() => redirectToHome()}>
            <p>NICK <span>&</span> BROOKE</p>
            <p>06.24.2022</p>
        </div>
    );
}

export default Header;
