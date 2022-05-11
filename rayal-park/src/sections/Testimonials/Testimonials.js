import testimonialsHtml from './Testimonials.html';
import './Testimonials.scss';

import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

const TestimonialsSection = (container) => {
    container.innerHTML += testimonialsHtml;
};

window.addEventListener('load', () => {
    const emblaNode = document.querySelector('.testimonials__wrapper');
    const options = { loop: false, align: 0 };
    const plugins = [Autoplay()];

    //carousel initialization
    const embla = EmblaCarousel(emblaNode, options, plugins);
});

export default TestimonialsSection;
