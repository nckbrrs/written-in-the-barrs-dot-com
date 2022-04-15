import React from 'react';
import SiteHeader from '../components/SiteHeader';
import '../styles/home.scss';
import blobWithBranch from '../assets/images/blobWithBranch.png';

const Home: React.FC = () => {
    return (
        <div id="home">
            <SiteHeader/>
            <div id="hero-container">
                <img id="blobWithBranch" src={blobWithBranch}/>
                <p id="blobText">JUNE&nbsp;24,&nbsp;2022<br/>CARY,&nbsp;NC</p>
            </div>
        </div>
    )
}

export default Home;
