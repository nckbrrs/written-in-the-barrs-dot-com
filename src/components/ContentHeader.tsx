import React from 'react';
import { WindowSizes } from '../types/types';
import useWindowSize from '../assets/useWindowSize';
import '../styles/content-header.scss';

interface ContentHeaderProps {
    title: string
}

const ContentHeader: React.FC<ContentHeaderProps> = (props) => {
    const windowSize: WindowSizes = useWindowSize();

    const classNames = () => {
        const classNames: string[] = [windowSize];
        return classNames.join(' ');
    }

    return (
        <div id="content-header" className={classNames()}>
            <p>{props.title}</p>
            <div id="line"/>
        </div>
    )
}

export default ContentHeader;
