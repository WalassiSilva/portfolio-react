import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import React from "react";
import '../styles/components/socialnetworks.sass' 

const socialNetworks = [
    {name:"linkedin", icon: <FaLinkedin />, link: "https://linkedin.com/in/walassi-silva" },
    {name: "github", icon: <FaGithub />, link: "https://github.com/WalassiSilva"}
    // {name: "instagram", icon: <FaInstagram />, link: "#"}
];

const SocialNetworks = () => {
    return (
        <section id="social-networks" >
            {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} key={network.index} target="_blank"> {network.icon} </a>
                
    ))}
                
        </section>
    )
};

export default SocialNetworks;