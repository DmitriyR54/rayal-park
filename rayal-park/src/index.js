// libraries
import _ from 'lodash';
// components
import HeaderSection from 'Sections/Header/Header.js';
// styles
import './styles/styles.scss';
import './fonts/fonts.scss';
import './styles/variables.scss';

const bodyContainer = document.body;
const mainContainer = (container) => {
    let main = document.createElement('main');

    return container.appendChild(main);
};

HeaderSection(bodyContainer);
mainContainer(bodyContainer);
