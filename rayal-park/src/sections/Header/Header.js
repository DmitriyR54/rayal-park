import headerHtml from './Header.html';
import './Header.scss';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';

const HeaderSection = (container) => {
    container.innerHTML += headerHtml;

    // show navigation
    const nav = document.querySelector('.header__nav');
    const navBtn = document.querySelector('#header__nav-btn');

    const showNav = (btn, nav) => {
        btn.classList.toggle('is-active');
        nav.classList.toggle('header__nav-active');
        // improving accessibility
        nav.tabIndex = 0;
        nav.focus();
    };

    navBtn.onclick = () => showNav(navBtn, nav);
};

export default HeaderSection;
