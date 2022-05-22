import React, { useState, useEffect } from 'react';

const RSVPForm: React.FC = () => {
    const [inputtedFirstName, setInputtedFirstName] = useState<string>('');
    const [inputtedLastName, setInputtedLastName] = useState<string>('');
    const [invitee, setInvitee] = useState<any>(null);
    const [hits, setHits] = useState<any[]>([]);
    const [hasClickedReview, setHasClickedReview] = useState<boolean>(false);
    const [submissionResponse, setSubmissionResponse] = useState<Response | null>(null);
    const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
    
    const handleAcceptOrDeclineSelection = (who: string, day: string, selection: string) => {
        if (who === 'invitee') {
            if (day === 'weddingDay') {
                setInvitee({...invitee, isAttendingWedding: selection === 'accept'})
            } else {
                setInvitee({...invitee, isAttendingRehearsalDinner: selection === 'accept'})
            }
        } else {
            if (day === 'weddingDay') {
                setInvitee({...invitee, isBringingPlusOneToWedding: selection === 'accept'})
            } else {
                setInvitee({...invitee, isBringingPlusOneToRehearsalDinner: selection === 'accept'})
            }
        }
    }
    
    const handleDietaryRestrictionsInput = (input: string) => {
        setInvitee({...invitee, dietaryRestrictions: input});
    }
    
    const handleSearch = async (event: any) => {
        event.preventDefault();
        setIsLoadingSearch(true);

        if (inputtedFirstName.trim() === '' || inputtedLastName.trim() === '') {
            alert('Please be sure to fill in all required fields!');
            return;
        }

        const params = new URLSearchParams({ "first": inputtedFirstName.toString().toLowerCase().trim(), "last": inputtedLastName.toString().toLowerCase().trim() });
        const res = await fetch('https://written-in-the-barrs-backend.herokuapp.com/invitees?' + params);
        const result = await res.json();
        console.dir(result);
        setHits(result ?? []);
        setIsLoadingSearch(false);
    }
    
    const goToReview = async (event: any) => {
        event.preventDefault();
        setHasClickedReview(true);
    }
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        
        const patchBody = { ...invitee, 
            isAttendingWedding: invitee.isAttendingWedding,
            isAttendingRehearsalDinner: invitee.isAttendingRehearsalDinner,
            isBringingPlusOneToWedding: invitee.isBringingPlusOneToWedding,
            isBringingPlusOneToRehearsalDinner: invitee.isBringingPlusOneToRehearsalDinner,
            dietaryRestrictions: invitee.dietaryRestrictions,
            hasRsvpd: true,
        };
        
        console.dir(patchBody);

        const response: Response = await fetch('https://written-in-the-barrs-backend.herokuapp.com/invitees', {
            body: JSON.stringify(patchBody),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PATCH',
        });

        console.dir(response.json());
        setSubmissionResponse(response);
    };
    
    useEffect(() => {
        if (submissionResponse !== null) {
            const reviewElement = document.getElementById('rsvpForm-review');
            const submissionConfirmationElement = document.getElementById('submission-confirmation');

            if (reviewElement !== null && submissionConfirmationElement !== null) {
                reviewElement.style.opacity = '0';
                submissionConfirmationElement.style.display = 'flex';

                setTimeout(() => {
                    reviewElement.style.display = 'none'
                    submissionConfirmationElement.style.opacity = '1';
                }, 1000)
            }
        }
    }, [submissionResponse])
    
    const makeSelections = () => {
        return (
            <form id="rsvpForm-selections" onSubmit={goToReview}>
                <div className="rsvpform-section">
                    <p className="rsvpform-section-header">
                        {"Wedding Day"}
                    </p>
                    <p className="rsvpform-section-subheader">
                        {"Friday, June 24, 2022"}
                    </p>
                    <div className="rsvpform-section-content">
                        <p>{`${invitee.firstName} ${invitee.lastName}`}</p>
                        <div className="rsvpform-section-content-buttons">
                            <button type="button" className={invitee.isAttendingWedding ? "selected" : "" } onClick={() => handleAcceptOrDeclineSelection('invitee', 'weddingDay', 'accept')}>accept</button>
                            <button type="button" className={invitee.isAttendingWedding ? "" : "selected" } onClick={() => handleAcceptOrDeclineSelection('invitee', 'weddingDay', 'decline')}>decline</button>
                        </div>
                        {   invitee.hasPlusOne && <>
                            <p>{`${invitee.plusOneFirstName} ${invitee.plusOneLastName}`}</p>
                            <div className="rsvpform-section-content-buttons">
                                <button type="button" className={invitee.isBringingPlusOneToWedding ? "selected" : "" } onClick={() => handleAcceptOrDeclineSelection('plusOne', 'weddingDay', 'accept')}>accept</button>
                                <button type="button" className={invitee.isBringingPlusOneToWedding ? "" : "selected" } onClick={() => handleAcceptOrDeclineSelection('plusOne', 'weddingDay', 'decline')}>decline</button>
                            </div></>
                        }
                    </div>
                </div>
                
                {   invitee.isInvitedToRehearsalDinner &&
                    <div className="rsvpform-section">
                        <p className="rsvpform-section-header">
                            {"Rehearsal Dinner"}
                        </p>
                        <p className="rsvpform-section-subheader">
                            {"Thursday, June 23, 2022"}
                        </p>
                        <div className="rsvpform-section-content">
                            <p>{`${invitee.firstName} ${invitee.lastName}`}</p>
                            <div className="rsvpform-section-content-buttons">
                                <button type="button" className={invitee.isAttendingRehearsalDinner ? "selected" : "" } onClick={() => handleAcceptOrDeclineSelection('invitee', 'rehearsalDinner', 'accept')}>accept</button>
                                <button type="button" className={invitee.isAttendingRehearsalDinner ? "" : "selected" } onClick={() => handleAcceptOrDeclineSelection('invitee', 'rehearsalDinner', 'decline')}>decline</button>
                            </div>
                            {   invitee.hasPlusOne && <>
                                <p>{`${invitee.plusOneFirstName} ${invitee.plusOneLastName}`}</p>
                                <div className="rsvpform-section-content-buttons">
                                    <button type="button" className={invitee.isBringingPlusOneToRehearsalDinner ? "selected" : "" } onClick={() => handleAcceptOrDeclineSelection('plusOne', 'rehearsalDinner', 'accept')}>accept</button>
                                    <button type="button" className={invitee.isBringingPlusOneToRehearsalDinner ? "" : "selected" } onClick={() => handleAcceptOrDeclineSelection('plusOne', 'rehearsalDinner   ', 'decline')}>decline</button>
                                </div></>
                            }
                        </div>
                    </div>
                }
                
                <div className="rsvpform-section">
                    <p className="rsvpform-section-header">
                        {"Dietary Restrictions"}
                    </p>
                    <p className="rsvpform-section-subheader">
                        {"(if any)"}
                    </p>
                    <div className="rsvpform-section-content">
                        <input name="dietaryRestrictions" placeholder="We got you covered!" type="text" value={invitee.dietaryRestrictions} onChange={(e) => handleDietaryRestrictionsInput(e.target.value)}/>
                    </div>
                </div>
                <button id="submitBtn" type="submit">Review</button>
            </form>
        )
    }
    
    const reviewSelections = () => {
        return (
            <form id="rsvpForm-review" onSubmit={handleSubmit}>
                <div className="rsvpform-section">
                    <p className="rsvpform-section-header">
                        {"Wedding Day"}
                    </p>
                    <p className="rsvpform-section-subheader">
                        {"Friday, June 24, 2022"}
                    </p>
                    <div className="rsvpform-section-content">
                        <p><b>{`${invitee.firstName} ${invitee.isAttendingWedding ? ' will': ' will not'} attend`}</b></p>
                        {   invitee.hasPlusOne && 
                                <p><b>{`${invitee.plusOneFirstName} ${invitee.isBringingPlusOneToWedding ? ' will': ' will not'} attend`}</b></p>
                        }
                    </div>
                </div>
                
                {   invitee.isInvitedToRehearsalDinner ? 
                    <div className="rsvpform-section">
                        <p className="rsvpform-section-header">
                            {`Rehearsal Dinner`}
                        </p>
                        <p className="rsvpform-section-subheader">
                            {"Thursday, June 23, 2022"}
                        </p>
                        <div className="rsvpform-section-content">
                            <p><b>{`${invitee.firstName} ${invitee.isAttendingRehearsalDinner ? ' will': ' will not'} attend`}</b></p>
                            {   invitee.hasPlusOne && 
                                <p><b>{`${invitee.plusOneFirstName} ${invitee.isBringingPlusOneToRehearsalDinner ? ' will': ' will not'} attend`}</b></p>
                            }
                        </div>
                    </div> : null
                }
                
                {   invitee.dietaryRestrictions.trim() !== "" ?
                    <div className="rsvpform-section">
                        <p className="rsvpform-section-header">
                            {"Dietary Restrictions"}
                        </p>
                        <p className="rsvpform-section-subheader">
                            {"(if any)"}
                        </p>
                        <div className="rsvpform-section-content">
                            <p><b>{invitee.dietaryRestrictions}</b></p>
                        </div>
                    </div> : null
                }
                <button type="submit">Submit</button>
            </form>
        )
    }
    
    const submissionConfirmation = () => {
        let success: boolean = submissionResponse?.status === 200;
        let successSubtitle: string = "We've received your RSVP and ";
        let failureSubtitle: string = "Something went wrong. Please contact Nick or Brooke directly.";
        
        if (invitee.isAttendingWedding || invitee.isAttendingRehearsalDinner || invitee.isBringingPlusOneToWedding || invitee.isBringingPlusOneToRehearsalDinner) {
            successSubtitle += "look forward to partying with you.";
        } else {
            successSubtitle += "you will be greatly missed.";
        }
        
        let title: string = success ? "Thank you!" : "Oh no!";
        let subtitle = success ? successSubtitle : failureSubtitle;
        
        return (
            <div id="submission-confirmation">
                <p className="submission-confirmation-title">{title}</p>
                <p className="submission-confirmation-subtitle">{subtitle}</p>
            </div>
        )
    }

    return <>
        {   invitee === null && 
            <form id="rsvpForm-search" onSubmit={handleSearch}>
            {hits.length === 0 && <>
                <p>Name</p>
                <div className="formRow">
                    <input name="firstName" placeholder="First Name" type="text" value={inputtedFirstName} onChange={(e) => setInputtedFirstName(e.target.value)}/>
                    <input name="lastName" placeholder="Last Name" type="text" value={inputtedLastName} onChange={(e) => setInputtedLastName(e.target.value)}/>
                </div>
                <button type="submit">{isLoadingSearch ? 'Loading...' : 'Search'}</button>
            </>}
                {hits.map((hit) => (
                    <div className="search-result" key={hit.entityId} onClick={() => setInvitee(hit)}>
                        RSVP for
                        <br/>
                        <strong>{hit.firstName} {hit.lastName}
                        {hit.hasPlusOne && <br/>}
                        {hit.hasPlusOne && ` and ${hit.plusOneFirstName} ${hit.plusOneLastName}`}</strong>
                    </div>
                ))}
            </form>
        }
        
        {/* Make selections */}
        {!hasClickedReview && invitee !== null && makeSelections()}
        
        {/* Review selections */}
        {hasClickedReview && reviewSelections()}
        
        {/* Submitted */}
        {submissionResponse !== null && submissionConfirmation()}
    </>
}

export default RSVPForm;