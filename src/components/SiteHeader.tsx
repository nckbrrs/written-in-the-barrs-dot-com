import React from "react";
import  { Link } from 'react-router-dom';
import Hamburger from './Hamburger'
import '../styles/site-header.scss';

const Header: React.FC = () => {
    return (
        <div id="site-header">
            <Hamburger/>
            <div className="header-links">
                <Link to="/rsvp"><span>RSVP</span></Link>
                <Link to="/details"><span>DETAILS</span></Link>
                <Link to="/registry"><span>REGISTRY</span></Link>
            </div>
            <div id="header-logo">
                <Link to="/">NICK&nbsp;<span>&</span>&nbsp;BROOKE</Link>
                <Link to="/">06.24.2022</Link>
            </div>
            <div className="header-links">
                <Link to="/story"><span>STORY</span></Link>
                <Link to="/people"><span>PEOPLE</span></Link>
                <Link to="/city"><span>CITY</span></Link>
            </div>
        </div>
    );
}

export default Header;
