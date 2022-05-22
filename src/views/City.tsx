import React from 'react';
import SiteHeader from '../components/SiteHeader';
import ContentHeader from '../components/ContentHeader';
import SiteFooter from '../components/SiteFooter';
import OurCityPOI from '../components/OurCityPOI';
import '../styles/city.scss';
import jubala from '../assets/images/pois/jubala.jpg';
import sola from '../assets/images/pois/sola.jpg';
import idleHour from '../assets/images/pois/idleHour.jpg';
import iris from '../assets/images/pois/iris.jpg';
import bw from '../assets/images/pois/benchwarmers.jpg';
import bbs from '../assets/images/pois/bbs.jpg';
import whiskey from '../assets/images/pois/whiskey.jpg';
import standard from '../assets/images/pois/standard.jpg';
import twoRoosters from '../assets/images/pois/twoRoosters.jpg';
import idleHourDonuts from '../assets/images/pois/idleHourDonuts.jpg';
import layered from '../assets/images/pois/layered.jpg';
import cupcake from '../assets/images/pois/cupcake.jpg';
import boxcar from '../assets/images/pois/boxcar.jpg';
import moore from '../assets/images/pois/moore.jpg';
import crabtree from '../assets/images/pois/crabtree.jpg';
import ncma from '../assets/images/pois/ncma.jpg';
import mayton from '../assets/images/pois/mayton.jpg';
import springhill from '../assets/images/pois/springhill.jpg';
import homewood from '../assets/images/pois/homewood.jpg';
import hyatt from '../assets/images/pois/hyatt.jpg';

const POIs = {
    'coffee': [
        {
            'image': jubala,
            'name': 'Jubala\nCoffee',
            'website': 'http://jubalacoffee.com/',
            'location': 'https://maps.apple.com/?address=200%20Park%20at%20North%20Hills%20St,%20Unit%20140,%20Raleigh,%20NC%20%2027609,%20United%20States&auid=9444065017328409905&ll=35.835876,-78.636929&lsp=9902&q=Jubala%20Coffee&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAQCgQIWRAGCgUIpAEQARImKdKcBkd16kFAMf2L4YcrqVPAOVByLKOb60FAQatakft1qFPAUAM%3D'
        },
        {
            'image': sola,
            'name': 'Sola\nCoffee',
            'website': 'http://solacoffee.com/',
            'location': 'https://maps.apple.com/?address=7705%20Lead%20Mine%20Rd,%20Raleigh,%20NC%20%2027615,%20United%20States&auid=8683646674173236955&ll=35.885316,-78.660089&lsp=9902&q=Sola%20Coffee&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRANCgQIWRABCgUIpAEQARImKXzke9y+8EFAMcCrfrqZqlPAOfq5oTjl8UFAQcQNXxHkqVPAUAM%3D'
        },
        {
            'image': idleHour,
            'name': 'Idle Hour\nCoffee',
            'website': 'https://idlehourcoffee.com',
            'location': 'https://maps.apple.com/?address=1818%20Oberlin%20Rd,%20Unit%20103,%20Raleigh,%20NC%2027608,%20United%20States&auid=10343519929642603386&ll=35.808810,-78.655007&lsp=9902&q=Idle%20Hour%20Coffee%20Roasters&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKTHW7ZP05kFAMUO4LN1JqlPAOa+rE/Aa6EFAQUWg4WCUqVPAUAM%3D'
        },
        {
            'image': iris,
            'name': 'Iris\nCoffee Lab',
            'website': 'https://www.iriscoffeelab.com',
            'location': 'https://maps.apple.com/?address=725%20Tucker%20St,%20Raleigh,%20NC%2027603,%20United%20States&auid=8322226606836200200&ll=35.786205,-78.649997&lsp=9902&q=Iris%20Coffee%20Lab%20and%20Cafe&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKUPXz50M5EFAMfvlX3n0qVPAOcGs9fky5UFAQQklWwo/qVPAUAQ%3D'
        }
    ],
    'food': [
        {
            'image': bw,
            'name': 'Benchwarmers\nBagels',
            'website': 'http://benchwarmersbagels.com/',
            'location': 'https://maps.apple.com/?address=500%20E%20Davie%20St,%20Raleigh,%20NC%20%2027601,%20United%20States&auid=13604684974940060779&ll=35.774963,-78.632176&lsp=9902&q=Benchwarmers%20Bagels&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAQCgQIWRADCgUIpAEQARImKZkkO8ye4kFAMYrDq0jQqFPAORf6YCjF40FAQdSiLOAaqFPAUAM%3D'
        },
        {
            'image': bbs,
            'name': 'BB\'s Crispy Chicken',
            'website': 'https://bbscrispychicken.com',
            'location': "https://maps.apple.com/?address=2920%20Sherman%20Oak%20Pl,%20Unit%20140,%20Raleigh,%20NC%2027609,%20United%20States&auid=4382506222248563131&ll=35.821608,-78.621284&lsp=9902&q=BB's%20Crispy%20Chicken%20-%20Raleigh%20Midtown%20East&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKfODX4CE6EFAMdjc+FcFqFPAOXFZhdyq6UFAQTJiidRPp1PAUAM%3D"
        },
        {
            'image': whiskey,
            'name': 'Whiskey\nKitchen',
            'website': 'https://www.whiskey.kitchen',
            'location': "https://maps.apple.com/?address=201%20W%20Martin%20St,%20Raleigh,%20NC%20%2027601,%20United%20States&auid=8168066089560443249&ll=35.776735,-78.642122&lsp=9902&q=Whiskey%20Kitchen&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhARCgQIChAACgQIUhABCgQIVRANCgQIWRABCgUIpAEQARImKciBDS/Z4kFAMYXAD4tyqVPAOUZXM4v/40FAQRs1hiG9qFPAUAQ%3D"
        },
        {
            'image': standard,
            'name': 'Standard\nBeer+Food',
            'website': 'https://standardbeerandfood.com',
            'location': "https://maps.apple.com/?address=205%20E%20Franklin%20St,%20Raleigh,%20NC%20%2027604,%20United%20States&auid=13423184286177273294&ll=35.790364,-78.634919&lsp=9902&q=Standard%20Beer%20+%20Food&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhBoCgQIChAACgQIUhABCgQIVRAQCgQIWRADCgUIpAEQARImKZzMiXiX5EFAMYUEuj39qFPAORqir9S95UFAQcNHO8xHqFPAUAQ%3D"
        },
    ],
    'sweets': [
        {
            'image': twoRoosters,
            'name': 'Two Roosters\nIce Cream',
            'website': 'https://www.tworoosters.com',
            'location': 'https://maps.apple.com/?address=215%20E%20Franklin%20St,%20Raleigh,%20NC%2027604,%20United%20States&auid=15316697397330968349&ll=35.790374,-78.634890&lsp=9902&q=Two%20Roosters%20Ice%20Cream&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCdAgoECAoQAAoECFIQAQoECFUQDgoECFkQAQoFCKQBEAESJimczIl4l+RBQDGFBLo9/ahTwDkaoq/UveVBQEHDRzvMR6hTwFAE'
        },
        {
            'image': idleHourDonuts,
            'name': 'Idle Hour\nCoffee',
            'website': 'https://idlehourcoffee.com',
            'location': 'https://maps.apple.com/?address=1818%20Oberlin%20Rd,%20Unit%20103,%20Raleigh,%20NC%2027608,%20United%20States&auid=10343519929642603386&ll=35.808810,-78.655007&lsp=9902&q=Idle%20Hour%20Coffee%20Roasters&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKTHW7ZP05kFAMUO4LN1JqlPAOa+rE/Aa6EFAQUWg4WCUqVPAUAM%3D'
        },
        {
            'image': layered,
            'name': 'Layered\nCroissanterie',
            'website': 'https://layeredcroissanterie.com',
            'location': "https://maps.apple.com/?address=911%20N%20West%20Street,%20Unit%20107,%20Raleigh,%20NC%2027603,%20United%20States&auid=13990517492715526129&ll=35.791442,-78.644379&lsp=9902&q=Layered%20Croissanterie&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCZAgoECAoQAAoECFIQAQoECFUQDwoECFkQAgoFCKQBEAESJim6avnNuuRBQDHSWCg8mKlTwDk4QB8q4eVBQEHYQgjK4qhTwFAD"
        },
        {
            'image': cupcake,
            'name': 'The Cupcake\nShoppe',
            'website': 'https://www.thecupcakeshopperaleigh.com',
            'location': "https://maps.apple.com/?address=104%20Glenwood%20Ave,%20Raleigh,%20NC%20%2027603,%20United%20States&auid=3712754168317508805&ll=35.782047,-78.647259&lsp=9902&q=The%20Cupcake%20Shoppe%20Bakery&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCZAgoECAoQAAoECFIQAQoECFUQDwoECFkQAgoFCKQBEAESJimZjkrshuNBQDGsHelmx6lTwDkXZHBIreRBQEEUqEb6EalTwFAE"
        },
    ],
    'fun': [
        {
            'image': boxcar,
            'name': 'Boxcar\nBarcade',
            'website': 'http://www.theboxcarbar.com/raleigh',
            'location': 'https://maps.apple.com/?address=330%20W%20Davie%20St,%20Raleigh,%20NC%20%2027601,%20United%20States&auid=4585197023170764614&ll=35.775960,-78.645022&lsp=9902&q=Boxcar%20Bar%20+%20Arcade&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhARCgQIChAACgQIUhABCgQIVRANCgQIWRABCgUIpAEQARImKT/ubMrB4kFAMSbUeDyiqVPAOb3Dkibo40FAQbQHWtPsqFPAUAM%3D'
        },
        {
            'image': moore,
            'name': 'Moore Square\nPark',
            'website': 'https://raleighnc.gov/moore-square',
            'location': 'https://maps.apple.com/?address=200%20S%20Blount%20St,%20Raleigh,%20NC%20%2027601,%20United%20States&auid=18420811275843648314&ll=35.776643,-78.635412&lsp=9902&q=Moore%20Square&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhASCgQIChABCgQIUhAHCgQIVRAOCgQIWRABCgUIpAEQARImKak3WUrn4kFAMX3LAGodqVPAOScNf6YN5EFAQcHgNgBoqFPAUAM%3D'
        },
        {
            'image': crabtree,
            'name': 'Crabtree\nValley Mall',
            'website': 'https://shopcrabtree.com',
            'location': "https://maps.apple.com/?address=4325%20Glenwood%20Ave,%20Raleigh,%20NC%20%2027612,%20United%20States&auid=4367200770715982651&ll=35.840118,-78.679186&lsp=9902&q=Crabtree%20Valley%20Mall&_ext=CjkKBQgEEOIBCgQIBRADCgUIBhCHAgoECAoQAAoECFIQCwoECFMQAwoECFUQDAoECFkQAQoFCKQBEAESJimiuanN9epBQDHI9QWP0qtTwDkgj88pHOxBQEFkfmkAHatTwFAE"
        },
        {
            'image': ncma,
            'name': 'NC Museum\nof Art',
            'website': 'https://ncartmuseum.org',
            'location': "https://maps.apple.com/?address=2110%20Blue%20Ridge%20Rd,%20Raleigh,%20NC%20%2027607,%20United%20States&auid=999115317294492985&ll=35.810068,-78.702528&lsp=9902&q=North%20Carolina%20Museum%20of%20Art&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAQCgQIChAACgQIUhAMCgQIVRAMCgQIWRABCgUIpAEQARImKcv9af7z5kFAMfag+UBQrVPAOYSAIV9M6EFAQfelyGtvrFPAUAM%3D"
        },
    ],
    'stay': [
        {
            'image': mayton,
            'name': 'The Mayton\nInn',
            'website': 'https://www.themayton.com',
            'location': 'https://maps.apple.com/?address=301%20S%20Academy%20St,%20Cary,%20NC%2027511,%20United%20States&auid=166893308128289463&ll=35.784894,-78.780877&lsp=9902&q=The%20Mayton&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARImKREpF2Xi40FAMSvauX5QslPAOY/+PMEI5UFAQSHZdRCbsVPAUAQ%3D'
        },
        {
            'image': springhill,
            'name': 'Springhill\nSuites',
            'website': 'https://www.marriott.com/en-us/hotels/rdurh-springhill-suites-raleigh-cary/overview/',
            'location': 'https://maps.apple.com/?address=1128%20Ledsome%20Ln,%20Cary,%20NC%20%2027511,%20United%20States&auid=3649897677149774357&ll=35.761714,-78.748777&lsp=9902&q=SpringHIll%20Suites&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRAQCgQIWRADCgUIpAEQARImKYloKmvs4EFAMTYsnxVGsFPAOQc+UMcS4kFAQT5k3bSQr1PAUAM%3D'
        },
        {
            'image': homewood,
            'name': 'Homewood\nSuites',
            'website': 'https://www.hilton.com/en/locations/usa/north-carolina/cary/homewood',
            'location': "https://maps.apple.com/?address=555%20Crossroads%20Blvd,%20Cary,%20NC%20%2027518,%20United%20States&auid=438233541865160812&ll=35.758184,-78.732827&lsp=9902&q=Homewood%20Suites%20by%20Hilton%20Raleigh%20Cary%20I-40&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRAQCgQIWRADCgUIpAEQARImKdhOSuh/4EFAMQJi7GVBr1PAOVYkcESm4UFAQdZaGQeMrlPAUAM%3D"
        },
        {
            'image': hyatt,
            'name': 'Hyatt\nHouse',
            'website': 'https://www.hyatt.com/en-US/shop/RDUXR?rooms=1&adults=2&checkinDate=2022-04-26&checkoutDate=2022-04-27&kids=0&currency=USD',
            'location': "https://maps.apple.com/?address=10030%20Sellona%20St,%20Raleigh,%20NC%2027617,%20United%20States&auid=4448840612354890874&ll=35.895570,-78.806377&lsp=9902&q=Hyatt%20House%20Raleigh%20/%20Rdu%20/%20Brier%20Creek&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARIkKekvquwM8kFAMXsjGnn3s1PAOWcF0Egz80FAQUmJ/clBs1PA"
        },
    ],
}

const City: React.FC = () => {
    return (
        <div id="city">
            <SiteHeader/>
            <ContentHeader title={"OUR CITY"}/>
            <div id="city-container">
                <div className="poi-row-container">
                    <p className="poi-row-container-header">Coffee</p>
                    <div className="poi-row">
                        { POIs['coffee'].map((poi) => <OurCityPOI {...poi}/>) }
                    </div>
                </div>
                <div className="poi-row-container">
                    <p className="poi-row-container-header">Food</p>
                    <div className="poi-row">
                        { POIs['food'].map((poi) => <OurCityPOI {...poi}/>) }
                    </div>
                </div>
                <div className="poi-row-container">
                    <p className="poi-row-container-header">Sweets</p>
                    <div className="poi-row">
                        { POIs['sweets'].map((poi) => <OurCityPOI {...poi}/>) }
                    </div>
                </div>
                <div className="poi-row-container">
                    <p className="poi-row-container-header">Fun</p>
                    <div className="poi-row">
                        { POIs['fun'].map((poi) => <OurCityPOI {...poi}/>) }
                    </div>
                </div>
                <div className="poi-row-container">
                    <p className="poi-row-container-header">Stay</p>
                    <div className="poi-row">
                        { POIs['stay'].map((poi) => <OurCityPOI {...poi}/>) }
                    </div>
                </div>
            </div>
            <SiteFooter/>
        </div>
    )
}

export default City;