import notificationHtml from './Notification.html';
import './Notification.scss';

const Notification = (container) => {
    container.innerHTML += notificationHtml;
};

const showNotification = (text) => {
    const notificationElement = document.querySelector('.notification');
    notificationElement.innerHTML = text;
    notificationElement.classList.add('notification-active');
    const removeClass = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                notificationElement.classList.remove('notification-active');
                resolve(true);
            }, 3000);
        });
    };
    removeClass().then(() => {
        setTimeout(() => {
            notificationElement.innerHTML = '';
        }, 1000);
    });
};

export { Notification, showNotification };
