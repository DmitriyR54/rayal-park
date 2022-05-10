import { showNotification } from '../Notification/Notification';
import './SubscribeField.scss';

const SubscribeField = () => {
    window.addEventListener('load', () => {
        const subscribeBtn = document.querySelectorAll('.subscribe__field-submit');

        subscribeBtn.forEach((btn) => {
            btn.onclick = () => {
                let subscribeInput = btn.previousElementSibling.value.trim();
                const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (subscribeInput.match(validRegex)) {
                    showNotification('You are subscribed!');
                }   else{
                    showNotification('Please, enter valid email address');
                }
            };
        });
    });
};

export default SubscribeField;
