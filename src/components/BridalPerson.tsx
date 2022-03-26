import React from 'react';
import '../styles/bridal-person.scss';

interface BridalPersonProps {
    photo: string,
    name: string,
    title: string,
    labelSide: string
}

const BridalPerson: React.FC<BridalPersonProps> = (props) => {
    return (
        props.labelSide === 'right' ? 
        <div className={`bridal-person label-right`}>
            <div className="img-container">
                <img id={`${props.name.split(' ')[0].toLowerCase()}`} src={props.photo}/>
            </div>
            <div className={`bridal-person-label`}>
                <p>{props.name}</p>
                <p>{props.title}</p>
            </div>
        </div> : 
        <div className={`bridal-person label-left`}>
            <div className={`bridal-person-label`}>
                <p>{props.name}</p>
                <p>{props.title}</p>
            </div>
            <div className="img-container">
                <img id={`${props.name.split(' ')[0].toLowerCase()}`} src={props.photo}/>
            </div>
        </div>
    )
}

export default BridalPerson;
