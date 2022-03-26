import React from 'react';
import SiteHeader from '../components/SiteHeader';
import ContentHeader from '../components/ContentHeader';
import SiteFooter from '../components/SiteFooter';
import '../styles/story.scss';
import nbPicBday from '../assets/images/nickAndBrooke/birthday.jpeg';
import nbPicNA from '../assets/images/nickAndBrooke/na.jpeg';
import nbPicLap from '../assets/images/nickAndBrooke/lap.jpeg';
import nbPicMountain from '../assets/images/nickAndBrooke/mountain.jpeg';

const Story: React.FC = () => {
    return (
        <div id="story">
            <SiteHeader/>
            <ContentHeader title={"OUR STORY"}/>
            <div id="story-container">
                <div className="story-photos first">
                    <div className="img-container">
                        <img id="nbPicNA" src={nbPicNA}/>
                    </div>
                    <div className="img-container">
                        <img id="nbPicBday" src={nbPicBday}/>
                    </div>
                    <div className="img-container">
                        <img id="nbPicLap" src={nbPicLap}/>
                    </div>
                    <div className="img-container">
                        <img id="nbPicMountain" src={nbPicMountain}/>
                    </div>
                </div>
                <div id="story-text">
                    <p className="content-title">Written from Brooke's perspective...</p>
                    <p className="content-body">
                        June 2020, I knew I was going to marry Nick. I just woke up one day and felt with all the certainty in my heart that he was who I would spend the rest of my days with.
                        <br/><br/>
                        It's amusing that we served in the same ministry together all those years, just out of reach and right where we needed to be. We both served with Clemson FCA for four years, went to the same church, and basically had all the same friends. It's incredible how an acquaintance can change your life.
                        <br/><br/>
                        When I moved to Raleigh in April of 2020, I figured I'd spend a few months stuck inside with my friends Nate and Zoë and maybe hang out with Nick as he was only one of 4 humans I knew in the area. Little did we know that COVID was here to stay, and our group would spend the whole next year together three times a week playing Catan and watching Superstore. 
                        <br/><br/>
                        We were just friends; that's what I kept telling everyone and myself. But by September, I knew I was in love with him after a weekend trip to visit my family and my hometown. He sent us the demo of the song he'd been working on for months (have you heard it? it's incredible) as soon as we got back to Raleigh, and I knew I was really in trouble. So now I was just left praying our flirty friendship was actually as flirty as I thought.
                        <br/><br/>
                        Fast forward to November, and my work was planning to bring everyone out to California for our end-of-the-year Christmas party. I offered a fun long weekend in LA to our group, and Nick was the only one to take me up on it. So, of course, Zoë and I spent the majority of the month leading up to the trip wondering if this was even real and what, if anything, it could mean.
                        <br/><br/>
                        But it was real, and it took everything in me to contain my excitement. After a few days in Orange County working with my team, Nick flew out to join me. We stayed in a pretty sketch Airbnb, visited some friends in San Diego, introduced him to a few of my friends, explored as much of LA as we could, and ate a lot of In-N-Out and Sidecar donuts. We hit our groove that Monday celebrating his 25th birthday and decided that we wanted to do that day pretty much all over again on our final day in SoCal. 
                        <br/><br/>
                        We ended our last day watching the sunset with Sidecar donuts on the beach at Santa Monica, then picked up In-N-Out to eat up at Griffith Observatory. We chatted and ate dinner on a little trail in front of Griffith, and something just felt right. And I worked up every ounce of courage I had to ask him if anything was going on between us. Thank God he said yes. My little heart soared. And as we walked back up to our rental car, he told me he really wanted to kiss me, and that is the story of the most romantic first kiss in human history with the LA skyline as the backdrop. 
                        <br/><br/>
                        Pretty much every day since then has been magic. Before we even made it official, I told him I loved him on the couch he would one day propose to me beside. He told me he loved me a few months later in his car outside a bar in his hometown. 
                        <br/><br/>
                        In the last year and some change, we've learned a lot about loving each other well, the beauty of the mundanity of life when you get to spend it with your best friend, and how sweet life really can be. We learned how to navigate a pandemic and massive political and social upheaval together (did I mention we started dating the day of the capital insurrection? lol), and we've learned how to come back to church after a year of couch church. There is truly no one I would have rather had by my side through the good and bad of the last two years. And man, there's no one I'd rather have by my side through whatever life throws at us in decades to come.
                        <br/><br/>
                        On February 12, my best friend and my family were in town so I could go dress shopping—yes, we were planning this wedding before he put a ring on it, chill—and he asked us to stop by his place before we all went out to dinner. And in the living room where we fell in love, he asked me to marry him. The best day of my life. That is until June 24. 
                    </p>
                </div>
                <div className="story-photos second">
                    <div className="img-container">
                        <img id="nbPicMountain2" src={nbPicMountain}/>
                    </div>
                </div>
            </div>
            <SiteFooter/>
        </div>
    )
}

export default Story;