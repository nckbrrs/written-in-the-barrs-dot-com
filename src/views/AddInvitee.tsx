import React, { useContext } from 'react';
import SiteHeader from '../components/SiteHeader';
import ContentHeader from '../components/ContentHeader';
import AddInviteeForm from '../components/AddInviteeForm';
import { WindowSizes } from '../types/types';
import { WindowSizeContext } from '../assets/windowSizeContext';
import '../styles/addInvitee.scss';

interface AddInviteeProps {
    hasPlusOne: boolean;
}

const AddInvitee: React.FC<AddInviteeProps> = (props) => {
    const windowSize: WindowSizes = useContext(WindowSizeContext);
    const classNames = () => {
        const classNames: string[] = [windowSize];
        return classNames.join(' ');
    }

    return (
        <div id="addInvitee" className={classNames()}>
            <SiteHeader/>
            <ContentHeader title={"CONTACT INFO"}/>
            <AddInviteeForm hasPlusOne={props.hasPlusOne}/>
        </div>
    );
}

export default AddInvitee;
