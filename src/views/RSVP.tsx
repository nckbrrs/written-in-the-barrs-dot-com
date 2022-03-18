import React from 'react';
import SiteHeader from '../components/SiteHeader';
import ContentHeader from '../components/ContentHeader';
import RSVPForm from '../components/RSVPForm';
import SiteFooter from '../components/SiteFooter';
import '../styles/rsvp.scss';

const RSVP: React.FC = () => {
    return (
        <div id="rsvp">
            <SiteHeader/>
            <ContentHeader title={"RSVP"}/>
            <RSVPForm/>
            <SiteFooter/>
        </div>
    )
}

export default RSVP;
