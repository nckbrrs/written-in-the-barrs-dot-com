import React, { useState, useEffect } from 'react';

const RSVPForm: React.FC = () => {
    const [inputtedFirstName, setInputtedFirstName] = useState<string>('');
    const [inputtedLastName, setInputtedLastName] = useState<string>('');
    const [selectedInvitee, setSelectedInvitee] = useState<any>(null);
    const [hits, setHits] = useState<any[]>([]);
    const [hasClickedReview, setHasClickedReview] = useState<boolean>(false);
    const [submissionResponse, setSubmissionResponse] = useState<Response | null>(null);
    
    useEffect(() => {
        setSelectedInvitee(null);
    }, [])
    
    const handleAcceptOrDeclineSelection = (who: string, day: string, selection: string) => {
        if (who === 'invitee') {
            if (day === 'weddingDay') {
                setSelectedInvitee({...selectedInvitee, isAttendingWedding: selection === 'accept'})
            } else {
                setSelectedInvitee({...selectedInvitee, isAttendingRehearsalDinner: selection === 'accept'})
            }
        } else {
            if (day === 'weddingDay') {
                setSelectedInvitee({...selectedInvitee, isBringingPlusOneToWedding: selection === 'accept'})
            } else {
                setSelectedInvitee({...selectedInvitee, isBringingPlusOneToRehearsalDinner: selection === 'accept'})
            }
        }
    }
    
    const handleDietaryRestrictionsInput = (input: string) => {
        setSelectedInvitee({...selectedInvitee, dietaryRestrictions: input});
    }
    
    const handleSearch = async (event: any) => {
        event.preventDefault();

        if (inputtedFirstName.trim() === '' || inputtedLastName.trim() === '') {
            alert('Please be sure to fill in all required fields!');
            return;
        }

        const params = new URLSearchParams({ "first": inputtedFirstName.toString().toLowerCase().trim(), "last": inputtedLastName.toString().toLowerCase().trim() });
        const res = await fetch('http://localhost:5000/invitees?' + params);
        const result = await res.json();
        console.dir(result);
        setHits(result ?? []);
    }
    
    const goToReview = async (event: any) => {
        event.preventDefault();
        setHasClickedReview(true);
    }
    
    const handleSubmit = async (event: any) => {
        console.log('uhh clicked submit');
        event.preventDefault();
        
        const putBody = { ...selectedInvitee, hasRsvpd: true };
        console.dir(putBody);

        const response: Response = await fetch('http://localhost:5000/invitees', {
            body: JSON.stringify(putBody),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
        });

        console.dir(response.json());
        setSubmissionResponse(response);
    };
    
    useEffect(() => {
        if (submissionResponse !== null) {
            const reviewElement = document.getElementById('rsvpForm-review');
            const thanksTextElement = document.getElementById('thanks-text');

            if (reviewElement !== null && thanksTextElement !== null) {
                reviewElement.style.opacity = '0';
                thanksTextElement.style.display = 'flex';

                setTimeout(() => {
                    reviewElement.style.display = 'none'
                    thanksTextElement.style.opacity = '1';
                }, 1000)
            }
        }
    }, [submissionResponse])

    return <>
        {   selectedInvitee === null &&
            <form id="rsvpForm-search" onSubmit={handleSearch}>
                <p>Name</p>
                <div className="formRow">
                    <input name="firstName" placeholder="First Name" type="text" value={inputtedFirstName} onChange={(e) => setInputtedFirstName(e.target.value)}/>
                    <input name="lastName" placeholder="Last Name" type="text" value={inputtedLastName} onChange={(e) => setInputtedLastName(e.target.value)}/>
                </div>
                <button type="submit">Search</button>
                {hits.map((hit) => (
                    <div className="search-result" key={hit.entityId}>
                        <a onClick={() => setSelectedInvitee(hit)}>
                            RSVP for
                            <br/>
                            <strong>{hit.firstName} {hit.lastName}
                            {hit.hasPlusOne && <br/>}
                            {hit.hasPlusOne && ` and ${hit.plusOneFirstName} ${hit.plusOneLastName}`}</strong>
                        </a>
                    </div>
                ))}
            </form>
        }
        
        {   selectedInvitee !== null && !hasClickedReview && 
            <form id="rsvpForm-weddingDay" onSubmit={goToReview}>
                <h1>Wedding Day</h1>
                <h4>Friday, June 24, 2022</h4>
                <br/>
                <h2>{selectedInvitee.firstName} {selectedInvitee.lastName}</h2>
                <div className="accept-decline-button-row">
                    <button type="button" className={selectedInvitee.isAttendingWedding ? "selected" : "" } onClick={() => handleAcceptOrDeclineSelection('invitee', 'weddingDay', 'accept')}>accept</button>
                    <button type="button" className={selectedInvitee.isAttendingWedding ? "" : "selected" } onClick={() => handleAcceptOrDeclineSelection('invitee', 'weddingDay', 'decline')}>decline</button>
                </div>
                
                {   selectedInvitee.hasPlusOne && 
                    <>
                    <h2>{selectedInvitee.plusOneFirstName} {selectedInvitee.plusOneLastName}</h2>
                    <div className="accept-decline-button-row">
                        <button type="button" className={selectedInvitee.isBringingPlusOneToWedding ? "selected" : "" } onClick={() => handleAcceptOrDeclineSelection('plusOne', 'weddingDay', 'accept')}>accept</button>
                        <button type="button" className={selectedInvitee.isBringingPlusOneToWedding ? "" : "selected" } onClick={() => handleAcceptOrDeclineSelection('plusOne', 'weddingDay', 'decline')}>decline</button>
                    </div>
                    </>
                }
                
                {   selectedInvitee.isInvitedToRehearsalDinner &&
                    <>
                    <h1>Rehearsal Dinner</h1>
                    <h4>Thursday, June 23, 2022</h4>
                    <br/>
                    <h2>{selectedInvitee.firstName} {selectedInvitee.lastName}</h2>
                    <div className="accept-decline-button-row">
                        <button type="button" className={selectedInvitee.isAttendingRehearsalDinner ? "selected" : "" } onClick={() => handleAcceptOrDeclineSelection('invitee', 'rehearsalDinner', 'accept')}>accept</button>
                        <button type="button" className={selectedInvitee.isAttendingRehearsalDinner ? "" : "selected" } onClick={() => handleAcceptOrDeclineSelection('invitee', 'rehearsalDinner', 'decline')}>decline</button>
                    </div>
                    
                    {   selectedInvitee.hasPlusOne && 
                        <>
                        <h2>{selectedInvitee.plusOneFirstName} {selectedInvitee.plusOneLastName}</h2>
                        <div className="accept-decline-button-row">
                            <button type="button" className={selectedInvitee.isBringingPlusOneToRehearsalDinner ? "selected" : "" } onClick={() => handleAcceptOrDeclineSelection('plusOne', 'rehearsalDinner', 'accept')}>accept</button>
                            <button type="button" className={selectedInvitee.isBringingPlusOneToRehearsalDinner ? "" : "selected" } onClick={() => handleAcceptOrDeclineSelection('plusOne', 'rehearsalDinner', 'decline')}>decline</button>
                        </div>
                        </>
                    }
                    </>
                }
                
                <h1>Dietary Restrictions</h1>
                <h4>(if any)</h4>
                <br/>
                <input name="dietaryRestrictions" placeholder="We got you covered!" type="text" value={selectedInvitee.dietaryRestrictions} onChange={(e) => handleDietaryRestrictionsInput(e.target.value)}/>
                <button type="submit">Review</button>
            </form>
        }
        
        {   hasClickedReview && 
            <form id="rsvpForm-review" onSubmit={handleSubmit}>
                <h1>Wedding Day</h1>
                <h4>Friday, June 24, 2022</h4>
                <br/>
                <h3>{selectedInvitee.firstName} {selectedInvitee.lastName} <b><u>{selectedInvitee.isAttendingWedding ? ' will attend' : ' will not attend' }</u></b></h3>
                {   selectedInvitee.hasPlusOne && 
                    <h3>{selectedInvitee.plusOneFirstName} {selectedInvitee.plusOneLastName} <b><u>{selectedInvitee.isBringingPlusOneToWedding ? ' will attend' : ' will not attend' }</u></b></h3>                
                }
                {   selectedInvitee.isInvitedToRehearsalDinner && 
                    <>
                        <h1>Rehearsal Dinner</h1>
                        <h4>Thursday, June 23, 2022</h4>
                        <br/>
                        <h3>{selectedInvitee.firstName} {selectedInvitee.lastName} <b><u>{selectedInvitee.isAttendingRehearsalDinner ? ' will attend' : ' will not attend' }</u></b></h3>
                        {   selectedInvitee.hasPlusOne && 
                            <h3>{selectedInvitee.plusOneFirstName} {selectedInvitee.plusOneLastName} <b><u>{selectedInvitee.isBringingPlusOneToRehearsalDinner ? ' will attend' : ' will not attend' }</u></b></h3>                
                        }
                    </>
                }
                {   selectedInvitee.dietaryRestrictions.trim() !== "" && 
                    <>
                    <h1>Dietary Restrictions</h1>
                    <br/>
                    <h3>{selectedInvitee.dietaryRestrictions}</h3>
                    </>
                }
                <button type="submit">Submit</button>
            </form>
        }
        
        <div id="thanks-text">
            {   submissionResponse !== null && submissionResponse.status === 200 || false
                ?
                <>
                <h3>Thank you!</h3>
                <br/>
                <h5>Whether or not you're able to make it,<br/>we love you and thank you<br/>for being a part of our lives.</h5>
                </>
                :
                <>
                <h3>Oh no!</h3>
                <br/>
                <h5>Something went wrong<br/>with your submission.<br/><br/>Please contact Nick or Brooke directly.</h5>
                </>
            }
        </div>
    </>
}

export default RSVPForm;