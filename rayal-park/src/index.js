// styles
import './styles/styles.scss';
import './styles/variables.scss';
import './fonts/fonts.scss';
// components
import HeaderSection from 'Sections/Header/Header';
import IntroSection from 'Sections/Intro/Intro';
import { Notification } from 'Sections/Notification/Notification';

const bodyContainer = document.body;
const mainContainer = (container) => {
    let main = document.createElement('main');
    IntroSection(main);
    Notification(main);

    return container.appendChild(main);
};

HeaderSection(bodyContainer);
mainContainer(bodyContainer);
