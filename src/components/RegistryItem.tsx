import React from 'react';
import link from '../assets/icons/link.svg';
import '../styles/registry-item.scss';

interface RegistryItemProps {
    image: string,
    name: string,
    website: string,
}

const RegistryItem:React.FC<RegistryItemProps> = (props) => {
    return (
        <div className="item">
            <div className="img-frame">
                <img src={props.image}/>
            </div>
            <p className="item-name">
                {props.name.includes('\n') ? <>
                    {props.name.split('\n')[0]}
                    <br/>
                    {props.name.split('\n')[1]}
                </> : <>
                    {props.name}
                </>
                }
            </p>
            <div className="item-link-container">
                <a href={props.website} className="item-link" target="_blank" rel="noopener noreferrer">
                    <img src={link}/>
                </a>
            </div>
        </div>
    )
}

export default RegistryItem;