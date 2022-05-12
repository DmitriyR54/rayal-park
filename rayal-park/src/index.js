// application scripts
import 'core-js/actual';
// styles
import './styles/styles.scss';
import './styles/variables.scss';
import './fonts/fonts.scss';
// sections
import HeaderSection from 'Sections/Header/Header';
import IntroSection from 'Sections/Intro/Intro';
import VideoPresentationSection from 'Sections/VideoPresentation/VideoPresentation';
import FeaturesSection from 'Sections/Features/Features';
import GallerySection from 'Sections/Gallery/Gallery';
import TestimonialsSection from 'Sections/Testimonials/Testimonials';
import SubscribeSection from 'Sections/Subscribe/Subscribe';
import FooterSection from 'Sections/Footer/Footer';
// reusable components
import { Notification } from './components/Notification/Notification';
import SubscribeField from './components/SubscribeField/SubscribeField';

const bodyContainer = document.body;
const mainContainer = (container) => {
    // root container
    let main = document.createElement('main');
    // sections
    IntroSection(main);
    VideoPresentationSection(main);
    FeaturesSection(main);
    GallerySection(main);
    TestimonialsSection(main);
    SubscribeSection(main);
    // reusable components
    Notification(main);
    SubscribeField();

    return container.appendChild(main);
};

HeaderSection(bodyContainer);
mainContainer(bodyContainer);
FooterSection(bodyContainer);
