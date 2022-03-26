import React from 'react';
import '../styles/content-header.scss';

interface ContentHeaderProps {
    title: string
}

const ContentHeader: React.FC<ContentHeaderProps> = (props) => {
    return (
        <div className="content-header">
            <p>{props.title}</p>
            <div id="line"/>
        </div>
    )
}

export default ContentHeader;
