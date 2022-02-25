import React from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContentHeader from '../components/ContentHeader';
import AddInviteeForm from '../components/AddInviteeForm';
import '../styles/addInvitee.scss';

interface AddInviteeProps {
    hasPlusOne: boolean;
}

const AddInvitee: React.FC<AddInviteeProps> = (props) => {
    return (
        <div id="addInvitee">
            <SiteHeader/>
            <ContentHeader title={"CONTACT INFO"}/>
            <AddInviteeForm hasPlusOne={props.hasPlusOne}/>
            <SiteFooter/>
        </div>
    );
}

export default AddInvitee;
