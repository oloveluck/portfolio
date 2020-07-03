import React from 'react';
import { FaGithub, FaLinkedin,  FaTwitter} from "react-icons/fa";

const githubLink = 'https://github.com/oloveluck';
const linkedInLink = 'https://www.linkedin.com/in/oloveluck/';
const twitterLink = 'https://twitter.com/oloveluck';

function ContactIcons() {
    return (
        <h2>
            <a className="buttonLink" href={githubLink} target="_blank" rel="noopener noreferrer"><FaGithub/></a> 
            <a className="buttonLink" href={linkedInLink} target="_blank" rel="noopener noreferrer" ><FaLinkedin/></a> 
            <a className="buttonLink" href={twitterLink} target="_blank" rel="noopener noreferrer"><FaTwitter/></a> 
             
        </h2>
    )
}

export default ContactIcons

