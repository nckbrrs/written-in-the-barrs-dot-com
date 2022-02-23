import React, { useState, useContext, useEffect } from 'react';
import SiteHeader from '../components/SiteHeader';
import ContentHeader from '../components/ContentHeader';
import { WindowSizes } from '../types/types';
import { WindowSizeContext } from '../assets/windowSizeContext';
import '../styles/allInvitees.scss';

const AllInvitees: React.FC = () => {
    const windowSize: WindowSizes = useContext(WindowSizeContext);
    const [allInvitees, setAllInvitees] = useState([]);
    const [enteredPassword, setEnteredPassword] = useState('');

    const classNames = () => {
        const classNames: string[] = [windowSize];
        return classNames.join(' ');
    }

    useEffect(() => {
        const getAllInvitees = async () => {
            await fetch('http://localhost:5000/invitees/all', {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            }).then((response) => {
                return response.json();
            }).then((responseJson) => {
                const sortedResponseJson = responseJson.sort((a: any, b: any) => a.lastName.localeCompare(b.lastName));
                setAllInvitees(sortedResponseJson);
            })
        }

        getAllInvitees();
    }, [])

    return (
        <div id="allInvitees" className={classNames()}>
            <SiteHeader/>
            <ContentHeader title={"ALL INVITEES IN DATABASE"}/>
            {   enteredPassword !== process.env.REACT_APP_NANDB_PW &&
                <form>
                    <p>Password</p>
                    <div className="formRow">
                        <input name="password" placeholder="password" type="text" value={enteredPassword} onChange={(event) => setEnteredPassword(event.target.value)}/>
                    </div>
                </form>
            }
            {   enteredPassword === process.env.REACT_APP_NANDB_PW &&
                allInvitees.map((response: any) => (
                    <div className="response" key={response.entityId}>
                        <p className="responseName">{response.firstName.trim()} {response.lastName.trim()} { response.hasPlusOne ? ` and ${response.plusOneFirstName.trim()} ${response.plusOneLastName.trim()}` : ``}</p>
                        <p className="responseAddrDigital">{response.emailAddress} / {response.phoneNumber}</p>
                        <p className="responseAddrPhysical">{`${response.address1.trim()}${response.address2.trim() !== "" ? " " + response.address2.trim() : ''}`}<br/>{response.city.trim()}, {response.state.trim()} {response.zipCode.trim()}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AllInvitees;
