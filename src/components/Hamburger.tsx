import React, { useState, useEffect } from 'react';
import  { Link } from 'react-router-dom';
import '../styles/hamburger.scss';

const Hamburger:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const burgerClassNames = () => {
        let classNames = ['burger'];

        if (isOpen) {
            classNames.push('isOpen');
        }

        return classNames.join(' ');
    }

    useEffect(() => {
        const hamburgerLinksElement = document.getElementById('hamburger-links');

        if (isOpen) {
            if (hamburgerLinksElement !== null) {
                hamburgerLinksElement.style.display = 'flex'
                setTimeout(() => { hamburgerLinksElement.style.opacity = '1'; }, 0);
            }
        } else {
            if (hamburgerLinksElement !== null) {
                hamburgerLinksElement.style.opacity = '0';
                setTimeout(() => {  hamburgerLinksElement.style.display = 'none' }, 333);
            }
        }
    }, [isOpen])

    return (
        <>
        <div id="hamburger" onClick={toggleIsOpen}>
            <div id="burger1" className={burgerClassNames()}/>
            <div id="burger2" className={burgerClassNames()}/>
            <div id="burger3" className={burgerClassNames()}/>
        </div>
        <div id="hamburger-links">
            <Link to="/">HOME</Link>
            <Link to="/rsvp">RSVP</Link>
            {/*<Link to="/">DETAILS</Link>*/}
            {/*<Link to="/">REGISTRY</Link>*/}
            {/*<Link to="/">STORY</Link>*/}
            {/*<Link to="/">PEOPLE</Link>*/}
            {/*<Link to="/">CITY</Link>*/}
        </div>
        </>
    )
}

export default Hamburger;
