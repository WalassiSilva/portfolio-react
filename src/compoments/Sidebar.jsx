import Avatar from '../img/foto-perfil.png';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import '../styles/components/sidebar.sass'

import React from 'react';


const Sidebar = () => {

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Walassi Silva" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="/files/walassi_silva_cv.pdf" download="Walassi_Silva_cv.pdf" className="btn" target='_blank'>
                Baixar Currículo
            </a>
        </aside>

    )
};
export default Sidebar;
