import React from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContentHeader from '../components/ContentHeader';
import  { Link } from 'react-router-dom';
import map from '../assets/images/map.png';
import clock from '../assets/icons/clock.svg';
import location from '../assets/icons/location.svg';
import '../styles/details.scss';

const Details: React.FC = () => {
    return (
        <div id="details">
            <SiteHeader/>
            <ContentHeader title={"DETAILS"}/>
            <div id="hero-container">
                <img id="map" src={map}/>
            </div>
            <div id="details-actual">
                <div id="datetime">
                    <img src={clock}/>
                    <p id="date">JUNE 24, 2022</p>
                    <p id="time">TO BE DETERMINED</p>
                </div>
                <div id="location">
                    <img src={location}/>
                    <p id="venue">CHATHAM STATION</p>
                    <p id="addr">110 N WALKER ST, CARY, NC</p>
                </div>
            </div>
            { false && <div id="link-container">
                <span id="rsvp-link"><Link to="/rsvp">RSVP</Link></span>
            </div> }
            <SiteFooter/>
        </div>
    )
}

export default Details;
