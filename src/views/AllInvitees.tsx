import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../assets/utils';
import SiteHeader from '../components/SiteHeader';
import ContentHeader from '../components/ContentHeader';
import SiteFooter from '../components/SiteFooter';
import { useTable } from 'react-table';
import '../styles/allInvitees.scss';

const AllInvitees: React.FC = () => {
    const [allInvitees, setAllInvitees] = useState<any>([]);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [loading, setLoading] = useState(true);

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
                const sortedResponseJson = responseJson.sort((a: any, b: any) => a.firstName.localeCompare(b.firstName));
                setAllInvitees(sortedResponseJson);
                setLoading(false);
            })
        }

        getAllInvitees();
    }, []);

    return (
        <div id="allInvitees">
            <SiteHeader/>
            <ContentHeader title={`${loading ? `loading...` : `ALL RESPONSES IN DATABASE (${allInvitees.length})`}`}/>
            { !loading && <>
            {   enteredPassword !== process.env.REACT_APP_NANDB_PW &&
                <form style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                    <p>Password</p>
                    <div className="formRow">
                        <input name="password" placeholder="password" type="text" value={enteredPassword} onChange={(event) => setEnteredPassword(event.target.value)}/>
                    </div>
                </form>
            }
            {   enteredPassword === process.env.REACT_APP_NANDB_PW &&<>
                { true && allInvitees.length !== 0 && 
                <table style={{paddingLeft: 20, paddingRight: 20, marginTop: -30}}>
                    <tr style={{textAlign: 'left', display: 'flex', flexFlow: 'row nowrap', alignItems: 'flex-start'}}>
                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>{'Invitee(s)'}</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    let name = `${x.firstName} ${x.lastName}`
                                    if (x.hasPlusOne) {
                                        name += ` and ${x.plusOneFirstName} ${x.plusOneLastName}`
                                    }

                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', alignItems: 'center'}}>
                                                {name}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </td>

                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Email</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', alignItems: 'center'}}>
                                                {x.emailAddress.toLowerCase()}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </td>

                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Phone</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    return (
                                        <tr>
                                            <td style={{height: 60, width: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                {x.phoneNumber}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </td>
                        
                        <td className="column" style={{width: 300}}>
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Address</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    let address = `${x.address1} ${x.address2} ${x.city} ${x.state} ${x.zipCode}`
                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                {address}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </td>

                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Invited 2 Wedding #</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    let numInvitedWedding = 1;
                                    if (x.hasPlusOne) {
                                        numInvitedWedding++;
                                    }
                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                {numInvitedWedding}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </td>
                        
                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Invited 2 RD #</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    let numInvitedRD: any = 0;
                                    if (x.isInvitedToRehearsalDinner) {
                                        numInvitedRD++;
            
                                        if (x.hasPlusOne) {
                                            numInvitedRD++;
                                        }
                                    }

                                    if (!x.isInvitedToRehearsalDinner) {
                                        numInvitedRD = 'not invited'
                                    }

                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                                {numInvitedRD}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </td>

                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Has RSVPd</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                                {x.hasRsvpd ? '-------->' : 'no response'}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </td>

                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Attending Wedding</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    let numAttendingWedding: any = '???'
                                    if (x.hasRsvpd) {
                                        let attendingWedding = 0;
                                        if (x.isAttendingWedding) {
                                            attendingWedding++;
                                        }
            
                                        if (x.isBringingPlusOneToWedding) {
                                            attendingWedding++;
                                        }
            
                                        numAttendingWedding = attendingWedding;
                                    }

                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                                {numAttendingWedding}
                                            </td>
                                        </tr>
                                    )
                                })}

                            </table>
                        </td>

                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Attending RD</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    let numAttendingRD: any = '???'
                                    if (x.hasRsvpd) {
                                        let attendingRD = 0;
                                        if (x.isAttendingRehearsalDinner) {
                                            attendingRD++;
                                        }
            
                                        if (x.isBringingPlusOneToRehearsalDinner) {
                                            attendingRD++;
                                        }

                                        numAttendingRD = attendingRD;
                                    }

                                    if (!x.isInvitedToRehearsalDinner) {
                                        numAttendingRD = 'not invited'
                                    }

                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                                {numAttendingRD}
                                            </td>
                                        </tr>
                                    )
                                })}

                            </table>
                        </td>

                        <td className="column">
                            <table>
                                <tr style={{display: 'flex', height: 50, alignItems: 'flex-end'}}>
                                    <th>Dietary Restrictions</th>
                                </tr>
                                {allInvitees.map((x: any) => {
                                    return (
                                        <tr>
                                            <td style={{height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                {x.dietaryRestrictions === '' ? 'none' : x.dietaryRestrictions}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </td>
                    </tr>
                </table>
                /*
                        

                        

                        

                        

                        return <>
                            <tr>
                                <td>{name}</td>
                                <td>{x.emailAddress}</td>
                                <td>{x.phoneNumber}</td>
                                <td>{address}</td>
                                <td>{numInvitedWedding}</td>
                                <td>{numInvitedRD}</td>
                                <td>{x.hasRsvpd ? 'yes' : 'no'}</td>
                                <td>{numAttendingWedding}</td>
                                <td>{numAttendingRD}</td>
                                <td>{x.dietaryRestrictions === '' ? 'n/a' : x.dietaryRestrictions}</td>
                            </tr>
                        </>
                    })}
                </table>
                */
                }
                { false && allInvitees.map((response: any, index: number) => (
                    <div className="response" key={response.entityId}>
                        <p className="responseName">{response.entityId}</p>
                        <p className="responseName">{index+2}. {capitalizeFirstLetter(response.firstName.trim())} {capitalizeFirstLetter(response.lastName.trim())} { response.hasPlusOne ? ` and ${response.plusOneFirstName.trim()} ${response.plusOneLastName.trim()}` : ``}</p>
                        <p className="responseAddrDigital">{response.emailAddress} / {response.phoneNumber}</p>
                        <p className="responseAddrPhysical">{`${response.address1.trim()}${response.address2.trim() !== "" ? " " + response.address2.trim() : ''}`}<br/>{response.city.trim()}, {response.state.trim()} {response.zipCode.trim()}</p>
                    </div>
                ))}</>
            }
            </>}
            <SiteFooter/>
        </div>
    )
}

export default AllInvitees;
