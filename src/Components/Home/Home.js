import React from 'react';
import { Link } from 'react-router-dom';
import welcomeMessageImg from './welcome_message.gif';
import contactDarrylImg from './contact_darryl.gif';
import darrylComposerImg from './darryl_johnson_composer.gif';
import groupsImg from './performing_groups.gif';
import latestWorksImg from './latest_works.gif';
import hydraulicLimeCover from './cover-hydraulic_lime.png';
import newPressImg from './news_press.gif';
import contactMeImg from './contact_me.gif';
import './Home.css';

function Home() {
    return (
        <div className="home-content">
            <div className="welcome">
            <img
                src={welcomeMessageImg}
                alt="Welcome, Here you'll find  great music for your ensemble or project."
                className="welcome-message"
            />
            <Link to="/contact">
                <img
                src={contactDarrylImg}
                alt="Contact Darryl"
                className="contact-darryl"
                />
            </Link>
            </div>
            <div className="content">
            <div className="content-left">
                <h2>
                    <img src={darrylComposerImg} className="composer-image" alt="Darryl Johnson II, Composer" />
                </h2>
                <div className="textblock">
                    <p className="textblock1">
                    Darryl Johnson II (b. 1984) is a native of Southern California. An
                    early interest in music led him to study several instruments as
                    well as music theory, composition, and orchestration. A lengthy
                    background in music transcription and arranging has fostered a
                    growing interest in diverse musical styles, yielding a fresh,
                    personal style that comprises a patchwork of music old, new,
                    popular, and traditional.
                    </p>
                    <p className="textblock2">
                    Today his primary interests involve bringing new music to
                    performing groups that strikes the delicate but crucial balance
                    between music that is beneficial and fulfilling to musicians, but
                    still accessible to listeners.
                    </p>
                </div>
                <Link to="/about" className="read-more">
                Read More
                </Link>
            </div>
            <div className="content-right">
                <h2>
                <img src={groupsImg} alt="Performing Groups" />
                </h2>
                <ul className="performing_groups">
                <li>
                    <Link to="/groups/wind">Wind Band</Link>
                </li>
                <li>
                    <Link to="/groups/orchestra">Orchestra</Link>
                </li>
                <li>
                    <Link to="/groups/jazz">Jazz Band</Link>
                </li>
                <li>
                    <Link to="/groups/chamber">Chamber Ensembes</Link>
                </li>
                <li>
                    <Link to="/groups/marching">Marching Band</Link>
                </li>
                <li>
                    <Link to="/multimedia">Film &amp; Multimedia</Link>
                </li>
                </ul>
            </div>
            <div className="hr"></div>
            <div className="box1">
                <h3 className="margin20">
                <img src={latestWorksImg} alt="Latest Works" />
                </h3>
                <img
                src={hydraulicLimeCover}
                alt="Hydraulic Lime Cover"
                className="lw-item"
                width="112"
                />
                <div className="textblock">
                <strong>Hydraulic Lime</strong>
                <br />
                <em>for Jazz Band</em>
                <br />
                <br />
                <a href="evaluation_score-hydraulic_lime.pdf" target="_blank">
                    Download Sample Score
                </a>
                </div>
            </div>
            <div className="box2">
                <h3 className="margin20">
                <img src={newPressImg} alt="News and Press" />
                </h3>
                <div className="textblock">
                Autumn Sound 2019 (Nov 4-22)
                <br />
                <br />
                Gulf Coast 2020 (Jan 20-Feb 10)
                <br />
                <br />
                Ozark Plus 2020 (Feb 15-28)
                <br />
                <br />
                Rust Belt 2020 (Mar 30-Apr 24)
                <br />
                <br />
                Great Lakes 2020 (May 4-29)
                <br />
                <br />
                </div>
            </div>
            <div className="box3">
                <h3 className="margin20">
                <img src={contactMeImg} alt="Contact Me" />
                </h3>
                <div className="textblock">
                If you have questions about:
                <br />
                <br />
                - Commissioning new works
                <br />
                - Purchasing existing works
                <br />
                - Original Film/Multimedia music
                <br />
                - Anything else
                <br />
                <br />
                <strong>email</strong>{' '}
                <a href="mailto:darryl@darryl2.com">darryl@darryl2.com</a>
                </div>
            </div>
            </div>
      </div>
    );
}

export default Home;
