import React from "react";
import  { Link } from 'react-router-dom';
import Hamburger from './Hamburger'
import '../styles/site-header.scss';

const Header: React.FC = () => {
    return (
        <div id="site-header">
            <Hamburger/>
            <div className="header-links">
                <Link to="/">RSVP</Link>
                <Link to="/">DETAILS</Link>
                <Link to="/">REGISTRY</Link>
            </div>
            <div id="header-logo">
                <Link to="/">NICK <span>&</span> BROOKE</Link>
                <Link to="/">06.24.2022</Link>
            </div>
            <div className="header-links">
                <Link to="/">STORY</Link>
                <Link to="/">PEOPLE</Link>
                <Link to="/">CITY</Link>
            </div>
        </div>
    );
}

export default Header;
