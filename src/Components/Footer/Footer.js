import React from 'react';
import facebookLogo from './facebook1.png';
import twitterLogo from './twitter1.png';
import instagramLogo from './instagram1.png';
import youtubeLogo from './youtube1.png';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="socialmedia">
                <a href="https://www.facebook.com/Darryl2Composer" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook logo" width="64" />
                </a>
                <a href="https://twitter.com/DarrylJohnsonII" target="_blank" rel="noopener noreferrer">
                    <img src={twitterLogo} alt="Twitter logo" width="64" />
                </a>
                <a href="https://www.instagram.com/darryljohnsonii" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram logo" width="64" />
                </a>
                <a href="https://www.youtube.com/channel/UCs7mku5Af6FfYm9CHKh6dmQ" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="Youtube logo" width="64" />
                </a>
                <div className="credits">
                    <p className="copyright">&nbsp;&nbsp;&nbsp;Copyright &copy; 2020</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
