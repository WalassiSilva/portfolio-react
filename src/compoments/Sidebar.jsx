import Avatar from '../img/foto-perfil.png';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Walassi Silva" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="../../src/files/cv.pdf" download="Walassi_Silva_cv" className="btn" target='_blank'>
                Ver Currículo
            </a>
        </aside>
    )
};
export default Sidebar;