import introHtml from './Intro.html';
import './Intro.scss';

import { showNotification } from '../Notification/Notification';

const IntroSection = (container) => {
    container.innerHTML += introHtml;
};

window.onload = () => {
    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('eng', { month: 'short' });
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    };

    let checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + 1);
    checkInDate.setHours(3, 0, 0, 0);

    let checkOutDate = new Date();
    checkOutDate.setDate(checkOutDate.getDate() + 3);
    checkOutDate.setHours(3, 0, 0, 0);

    const pickCheckInDate = (label, input) => {
        label.innerHTML = formatDate(checkInDate);

        label.onclick = () => {
            if (typeof input.showPicker === 'function') {
                input.showPicker();
            }
            input.onchange = () => {
                let value = new Date(input.value);
                if (value <= checkOutDate) {
                    checkInDate = value;
                    label.innerHTML = formatDate(checkInDate);
                } else {
                    label.innerHTML = 'Pick a date';
                }
            };
        };
    };

    const pickCheckOutDate = (label, input) => {
        label.innerHTML = formatDate(checkOutDate);

        label.onclick = () => {
            if (typeof input.showPicker === 'function') {
                input.showPicker();
            }
            input.onchange = () => {
                let value = new Date(input.value);
                if (value >= checkInDate) {
                    checkOutDate = value;
                    label.innerHTML = formatDate(checkOutDate);
                } else {
                    label.innerHTML = 'Pick a date';
                }
            };
        };
    };

    const checkInDateLabel = document.querySelectorAll('.intro__findroom-section-label')[0];
    const checkInDateInput = document.querySelectorAll('.intro__findroom-section-date')[0];
    pickCheckInDate(checkInDateLabel, checkInDateInput);

    const checkOutDateLabel = document.querySelectorAll('.intro__findroom-section-label')[1];
    const checkOutDateInput = document.querySelectorAll('.intro__findroom-section-date')[1];
    pickCheckOutDate(checkOutDateLabel, checkOutDateInput);

    const submitFindRoom = (event, checkin, checkout) => {
        event.preventDefault();
        if (checkin.innerHTML !== 'Pick a date' && checkout.innerHTML !== 'Pick a date') {
            showNotification('Excellent, you have booked a room!');
        } else {
            showNotification('Please, pick a date.');
        }
    };

    const findRoomForm = document.querySelector('.intro__findroom');

    findRoomForm.onsubmit = (e) => submitFindRoom(e, checkInDateLabel, checkOutDateLabel);
};

export default IntroSection;
