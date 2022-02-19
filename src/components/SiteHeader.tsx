import React from "react";
import '../styles/site-header.scss';
import useWindowSize from "../assets/useWindowSize";
import { WindowSizes } from "../types/types";

const Header: React.FC = () => {
    const windowSize: WindowSizes = useWindowSize();

    return (
        <div id="site-header" className={windowSize}>
            <p>NICK <span>&</span> BROOKE</p>
            <p>06.24.2022</p>
        </div>
    );
}

export default Header;
