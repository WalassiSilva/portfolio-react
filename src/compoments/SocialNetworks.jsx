import { FaLinkedin, FaGithub } from 'react-icons/fa';

// import React from "react";
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin />, link: "https://linkedin.com/in/walassi-silva" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/WalassiSilva" }
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a
                    key={network.id}
                    href={network.link}
                    className="social-btn"
                    id={network.name}
                    target="_blank"
                    rel='noreferrer'> {network.icon}
                </a>
            ))}

        </section>
    )
};

export default SocialNetworks;