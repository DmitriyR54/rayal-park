import preloaderHtml from './Preloader.html';
import './Preloader.scss';

const Preloader = (container) => {
    container.innerHTML += preloaderHtml;
};

window.addEventListener('load', () => {
    const pagePreloader = document.querySelector('.page-preloader');
    pagePreloader.style.display = 'none';
});

export default Preloader;
