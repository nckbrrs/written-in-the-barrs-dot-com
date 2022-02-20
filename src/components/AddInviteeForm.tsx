import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../assets/utils';
import '../styles/addInvitee.scss';

interface AddInviteeFormProps {
    hasPlusOne: boolean
}

const AddInviteeForm: React.FC<AddInviteeFormProps> = (props) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [addressLine1, setAddressLine1] = useState<string>('');
    const [addressLine2, setAddressLine2] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [zipCode, setZipCode] = useState<string>('');
    const [country, setCountry] = useState<string>('United States of America');
    const [plusOneFirstName, setPlusOneFirstName] = useState<string>('');
    const [plusOneLastName, setPlusOneLastName] = useState<string>('');
    const [submissionResponse, setSubmissionResponse] = useState<Response | null>(null);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const fieldsToCheck = [firstName, lastName, emailAddress, phoneNumber, addressLine1, city, state, zipCode, country];
        if (props.hasPlusOne) {
            fieldsToCheck.concat([plusOneFirstName, plusOneLastName]);
        }

        if (fieldsToCheck.includes('')) {
            alert('Please be sure to fill in all required fields!');
            return;
        }

        const postBody = {
            "firstName": capitalizeFirstLetter(firstName),
            "lastName": capitalizeFirstLetter(lastName),
            "emailAddress": emailAddress,
            "phoneNumber": phoneNumber,
            "address1": addressLine1,
            "address2": addressLine2,
            "city": city,
            "state": state,
            "zipCode": zipCode,
            "country": country,
            "hasPlusOne": props.hasPlusOne,
            "plusOneFirstName": props.hasPlusOne ? plusOneFirstName : "",
            "plusOneLastName": props.hasPlusOne ? plusOneLastName : "",
            "isInvitedToRehearsalDinner": false,
            "hasRsvpd": false,
            "isAttendingWedding": false,
            "isAttendingRehearsalDinner": false,
            "isBringingPlusOneToWedding": false,
            "isBringingPlusOneToRehearsalDinner": false,
            "dietaryRestrictions": ""
        }

        const response: Response = await fetch('/.netlify/functions/server/addInvitee', {
            body: JSON.stringify(postBody),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        setSubmissionResponse(response);
    };

    return (
        <>
            <form id="addInviteeForm" style={submissionResponse !== null ? {'display': 'none', 'opacity': '0'} : {}} onSubmit={handleSubmit}>
                <p>Name</p>
                <div className="formRow">
                    <input name="firstName" placeholder="First Name" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                    <input name="lastName" placeholder="Last Name" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                </div>
                <p>Digital</p>
                <div className="formRow">
                    <input name="emailAddress" placeholder="Email Address" type="text" value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)}/>
                    <input name="phoneNumber" placeholder="Phone Number" type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
                </div>
                <p>Physical</p>
                <div className="formRow">
                    <input name="address1" placeholder="Address Line 1" type="text" value={addressLine1} onChange={(event) => setAddressLine1(event.target.value)}/>
                </div>
                <div className="formRow">
                    <input name="address2" placeholder="Address Line 2 (optional)" type="text" value={addressLine2} onChange={(event) => setAddressLine2(event.target.value)}/>
                </div>
                <div className="formRow">
                    <input name="city" placeholder="City" type="text" value={city} onChange={(event) => setCity(event.target.value)}/>
                </div>
                <div className="formRow">
                    <input name="state" placeholder="State" type="text" value={state} maxLength={2} onChange={(event) => setState(event.target.value)}/>
                    <input name="zipCode" placeholder="Zip" type="text" value={zipCode} maxLength={5} onChange={(event) => setZipCode(event.target.value)}/>
                </div>
                <div className="formRow">
                    <select name="country" value={country} onChange={(event) => setCountry(event.target.value)}>
                        {['United States of America', 'Belize', 'Other'].map((x) => <option key={x} value={x}>{x}</option>)}
                    </select>
                </div>
                {   props.hasPlusOne && <>
                    <p>Partner</p>
                    <div className="formRow">
                        <input name="plusOneFirstName" placeholder="First Name" type="text" value={plusOneFirstName} onChange={(event) => setPlusOneFirstName(event.target.value)}/>
                        <input name="plusOneLastName" placeholder="Last Name" type="text" value={plusOneLastName} onChange={(event) => setPlusOneLastName(event.target.value)}/>
                    </div>
                    </>
                }
                <button type="submit">Submit</button>
            </form>
            <p id="thanks-text" style={submissionResponse !== null ? {'display': 'flex', 'opacity': '1'} : {}}>
                {   submissionResponse !== null && submissionResponse.status === 200
                    ?
                    <>Thank you!<br/>We&apos;ll be in touch.</>
                    :
                    <>Oh no!<br/><br/>Something went wrong<br/>with your submission.<br/><br/>Please contact Nick or Brooke directly.</>
                }
            </p>
        </>
    )
}

export default AddInviteeForm;
