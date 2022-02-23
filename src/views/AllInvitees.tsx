import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../assets/utils';
import SiteHeader from '../components/SiteHeader';
import ContentHeader from '../components/ContentHeader';
import '../styles/allInvitees.scss';

const AllInvitees: React.FC = () => {
    const [allInvitees, setAllInvitees] = useState([]);
    const [enteredPassword, setEnteredPassword] = useState('');

    useEffect(() => {
        const getAllInvitees = async () => {
            await fetch('https://written-in-the-barrs-backend.herokuapp.com/invitees/all', {
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
        <div id="allInvitees">
            <SiteHeader/>
            <ContentHeader title={`ALL RESPONSES IN DATABASE (${allInvitees.length})`}/>
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
                        <p className="responseName">{capitalizeFirstLetter(response.firstName.trim())} {capitalizeFirstLetter(response.lastName.trim())} { response.hasPlusOne ? ` and ${response.plusOneFirstName.trim()} ${response.plusOneLastName.trim()}` : ``}</p>
                        <p className="responseAddrDigital">{response.emailAddress} / {response.phoneNumber}</p>
                        <p className="responseAddrPhysical">{`${response.address1.trim()}${response.address2.trim() !== "" ? " " + response.address2.trim() : ''}`}<br/>{response.city.trim()}, {response.state.trim()} {response.zipCode.trim()}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AllInvitees;
