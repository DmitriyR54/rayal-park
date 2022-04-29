import introHtml from './Intro.html';
import './Intro.scss';

import { showNotification } from '../Notification/Notification';

const IntroSection = (container) => {
    container.innerHTML += introHtml;
};

window.onload = () => {
    const checkinDateSection = document.querySelector('[data-datepicker="checkin"]');
    const checkoutDateSection = document.querySelector('[data-datepicker="checkout"]');

    const pickDate = (section, assignment) => {
        const dateLabel = section.querySelector('label');
        const dateInput = section.querySelector('input');

        const getDate = (date) => {
            const day = date.getDate();
            const month = date.toLocaleString('eng', { month: 'short' });
            const year = date.getFullYear();

            return `${day} ${month} ${year}`;
        };

        let checkinDate = new Date();
        let checkoutDate = new Date();

        if (assignment === 'check-in') {
            checkinDate.setDate(checkinDate.getDate() + 1);
            dateLabel.innerHTML = getDate(checkinDate);

            dateLabel.onclick = () => {
                dateInput.showPicker();
                dateInput.oninput = () => {
                    const value = new Date(dateInput.value);
                    if (value < checkoutDate) {
                        checkinDate = value;
                        dateLabel.innerHTML = getDate(checkinDate);
                    } else {
                        dateLabel.innerHTML = 'Pick a date';
                        checkinDate = null;
                    }
                };
            };
        } else if (assignment === 'check-out') {
            checkoutDate.setDate(checkoutDate.getDate() + 3);
            dateLabel.innerHTML = getDate(checkoutDate);

            dateLabel.onclick = () => {
                dateInput.showPicker();
                dateInput.oninput = () => {
                    const value = new Date(dateInput.value);
                    if (value >= checkinDate) {
                        checkoutDate = value;
                        dateLabel.innerHTML = getDate(checkoutDate);
                    } else {
                        dateLabel.innerHTML = 'Pick a date';
                        checkoutDate = null;
                    }
                };
            };
        }
    };

    pickDate(checkinDateSection, 'check-in');
    pickDate(checkoutDateSection, 'check-out');

    const submitFindRoom = (event, checkin, checkout) => {
        event.preventDefault();
        if (checkin.innerHTML !== 'Pick a date' && checkout.innerHTML !== 'Pick a date') {
            showNotification('Excellent, you have booked a room!');
        } else {
            showNotification('Please, pick a date.');
        }
    };

    const findRoomForm = document.querySelector('.intro__findroom');
    const checkinValue = document.querySelectorAll('.intro__findroom-section-label')[0];
    const checkoutValue = document.querySelectorAll('.intro__findroom-section-label')[1];

    findRoomForm.onsubmit = (e) => submitFindRoom(e, checkinValue, checkoutValue);
};

export default IntroSection;
