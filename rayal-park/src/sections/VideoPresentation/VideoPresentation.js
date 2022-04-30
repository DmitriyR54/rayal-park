import videopresentationHtml from './VideoPresentation.html';
import './VideoPresentation.scss';

const VideoPresentationSection = (container) => {
    console.log(videopresentationHtml);
    container.innerHTML += videopresentationHtml;
};

export default VideoPresentationSection;
