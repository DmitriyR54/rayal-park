import headerHtml from './Header.html';
import './Header.scss';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';

const HeaderSection = (container) => {
    container.innerHTML += headerHtml;
};

window.addEventListener('load', () => {
    const body = document.body;
    // set fixed header on top of the screen
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 300) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    });

    // show navigation when user clicks menu button
    const nav = header.querySelector('.header__nav');
    const navBtn = header.querySelector('.header__nav-btn');

    const showNav = (btn, nav) => {
        btn.classList.toggle('is-active');
        nav.classList.toggle('header__nav-active');
        body.classList.toggle('no-scroll');
        // improving accessibility
        nav.tabIndex = 0;
        nav.focus();
    };

    navBtn.onclick = () => showNav(navBtn, nav);

    // handle click on logo elements
    const logoLinks = document.querySelectorAll('.logo');

    logoLinks.forEach((logo) => {
        logo.onclick = (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    });

    // handle links-anchors click
    const anchorsLinks = header.querySelectorAll('.header__nav-link');

    anchorsLinks.forEach((link) => {
        link.onclick = (event) => {
            event.preventDefault();

            let elOffset = document.querySelector(`.${link.getAttribute('href')}`).offsetTop;
            window.scrollTo({ top: elOffset, behavior: 'smooth' });
            // hide menu if opened
            showNav(navBtn, nav);
            if (body.className.includes('no-scroll')) {
                body.classList.toggle('no-scroll');
            }
        };
    });
});

export default HeaderSection;
