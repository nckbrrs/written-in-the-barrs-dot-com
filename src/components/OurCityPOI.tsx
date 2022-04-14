import React from 'react';
import link from '../assets/icons/link.svg';
import location from '../assets/icons/location-white.svg';
import '../styles/our-city-poi.scss';

interface OurCityPOIProps {
    image: string,
    name: string,
    website: string,
    location: string,
}

const OurCityPOI:React.FC<OurCityPOIProps> = (props) => {
    return (
        <div className="poi">
            <div className="img-frame">
                <img id="img-bw" src={props.image}/>
            </div>
            <p className="poi-name">
                {props.name.includes('\n') ? <>
                    {props.name.split('\n')[0]}
                    <br/>
                    {props.name.split('\n')[1]}
                </> : <>
                    {props.name}
                </>
                }
            </p>
            <div className="poi-links">
                <a href={props.website} className="poi-link" target="_blank" rel="noopener noreferrer">
                    <img src={link}/>
                </a>
                <br/>
                <a href={props.location} className="poi-link" target="_blank" rel="noopener noreferrer">
                    <img src={location}/>
                </a>
            </div>
        </div>
    )
}

export default OurCityPOI;