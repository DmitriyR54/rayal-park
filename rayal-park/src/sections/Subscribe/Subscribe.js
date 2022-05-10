import subscribeHtml from './Subscribe.html';
import './Subscribe.scss';

import { showNotification } from '../../components/Notification/Notification.js';

const SubscribeSection = (container) => {
    container.innerHTML += subscribeHtml;
};

export default SubscribeSection;
