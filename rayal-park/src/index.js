// styles
import './styles/styles.scss';
import './styles/variables.scss';
import './fonts/fonts.scss';
// components
import { Notification } from 'Sections/Notification/Notification';
import HeaderSection from 'Sections/Header/Header';
import IntroSection from 'Sections/Intro/Intro';
import VideoPresentationSection from 'Sections/VideoPresentation/VideoPresentation';
import FeaturesSection from 'Sections/Features/Features';
import GallerySection from 'Sections/Gallery/Gallery';

const bodyContainer = document.body;
const mainContainer = (container) => {
    let main = document.createElement('main');
    Notification(main);
    IntroSection(main);
    VideoPresentationSection(main);
    FeaturesSection(main);
    GallerySection(main);

    return container.appendChild(main);
};

HeaderSection(bodyContainer);
mainContainer(bodyContainer);
