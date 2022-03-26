import React from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContentHeader from '../components/ContentHeader';
import BridalPerson from '../components/BridalPerson';
import '../styles/people.scss';
import Amberlyn from '../assets/images/bridalParty/amberlyn.png';
import Ashley from '../assets/images/bridalParty/ashley.png';
import Claire from '../assets/images/bridalParty/claire.png';
import Eric from '../assets/images/bridalParty/eric.png';
import Hannah from '../assets/images/bridalParty/hannah.png';
import Holly from '../assets/images/bridalParty/holly.png';
import Joe from '../assets/images/bridalParty/joe.png';
import John from '../assets/images/bridalParty/john.png';
import Kassidy from '../assets/images/bridalParty/kassidy.png';
import Kevin from '../assets/images/bridalParty/kevin.png';
import Maddi from '../assets/images/bridalParty/maddi.png';
import Ryan from '../assets/images/bridalParty/ryan.png';
import Sam from '../assets/images/bridalParty/sam.png';
import Sarah from '../assets/images/bridalParty/sarah.png';
import Stephen from '../assets/images/bridalParty/stephen.png';
import Thomas from '../assets/images/bridalParty/thomas.png';
import Wes from '../assets/images/bridalParty/wes.png';
import Win from '../assets/images/bridalParty/win.png';
import Zoe from '../assets/images/bridalParty/zoe.png';

const Bridesmaids = [
    {
        photo: Kassidy,
        name: 'Kassidy Gomes',
        title: 'Maid of Honor'
    },
    {
        photo: Amberlyn,
        name: 'Amberlyn White',
        title: 'Bridesmaid'
    },
    {
        photo: Zoe,
        name: 'Zoë Swift',
        title: 'Bridesmaid'
    },
    {
        photo: Maddi,
        name: 'Maddi Martin',
        title: 'Bridesmaid'
    },
    {
        photo: Claire,
        name: 'Claire Smith',
        title: 'Bridesmaid'
    },
    {
        photo: Sarah,
        name: 'Sarah Wills',
        title: 'Bridesmaid'
    },
    {
        photo: Hannah,
        name: 'Hannah Forehand',
        title: 'Bridesmaid'
    },
    {
        photo: Holly,
        name: 'Holly Powell',
        title: 'Bridesmaid'
    },
    {
        photo: Ashley,
        name: 'Ashley Carsten',
        title: 'Bridesmaid'
    }
]

const Groomsmen = [
    {
        photo: Win,
        name: 'Win Marks',
        title: 'Best Man'
    },
    {
        photo: John,
        name: 'John Wheeler',
        title: 'Groomsman'
    },
    {
        photo: Thomas,
        name: 'Thomas Riedy',
        title: 'Groomsman'
    },
    {
        photo: Eric,
        name: 'Eric White',
        title: 'Groomsman'
    },
    {
        photo: Sam,
        name: 'Sam Lopane',
        title: 'Groomsman'
    },
    {
        photo: Kevin,
        name: 'Kevin Wright',
        title: 'Groomsman'
    },
    {
        photo: Ryan,
        name: 'Ryan Barrs',
        title: 'Groomsman'
    },
    {
        photo: Joe,
        name: 'Joe Barrs',
        title: 'Groomsman'
    },
    {
        photo: Stephen,
        name: 'Stephen Odom',
        title: 'Groomsman'
    },
    {
        photo: Wes,
        name: 'Wes Forehand',
        title: 'Groomsman'
    },
]

const People: React.FC = () => {
    return (
        <div id="people">
            <SiteHeader/>
            <ContentHeader title={"OUR PEOPLE"}/>
            <div id="people-container">
                <div id="left-container" className="entire-side">
                    <ContentHeader title={"THE LADIES"}/>
                    {
                        Bridesmaids.map((x, i) => {
                            return (
                                <BridalPerson 
                                    photo={x.photo}
                                    name={x.name}
                                    title={x.title}
                                    labelSide={`${i%2===0 ? 'right' : 'left'}`}
                                />
                            )
                        })
                    }
                </div>
                <div id="line2"/>
                <div id="line3"/>
                <div id="right-container" className="entire-side">
                    <ContentHeader title={"THE BOYS"}/>
                    {
                        Groomsmen.map((x, i) => {
                            return (
                                <BridalPerson 
                                    photo={x.photo}
                                    name={x.name}
                                    title={x.title}
                                    labelSide={`${i%2===0 ? 'right' : 'left'}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <SiteFooter/>
        </div>
    )
}

export default People;
