import videopresentationHtml from './VideoPresentation.html';
import './VideoPresentation.scss';

const VideoPresentationSection = (container) => {
    container.innerHTML += videopresentationHtml;
};

window.addEventListener('load', () => {
    // this function sorts videos in list
    const videoListStylization = () => {
        const videos = document.querySelectorAll('.videoPresentation__video');
        let unactiveVideos = [];

        videos.forEach((video, index) => {
            if (!video.className.includes('active')) {
                unactiveVideos.push(videos[index]);
            }
        });
        unactiveVideos.forEach((video, index) => {
            video.style.transform = `translateX(${30 + 5 * (5 * index)}px) translateY(-${30 + 5 * (5 * index)}px)`;
            video.style.zIndex = 4 - (index + 1);
        });
    };

    videoListStylization();

    const videosList = document.querySelectorAll('.videoPresentation__video');
    videosList.forEach((video) => {
        // this function sets active video
        (function () {
            const handleClick = () => {
                videosList.forEach((el) => {
                    el.classList.remove('videoPresentation__video-active');
                });
                video.classList.add('videoPresentation__video-active');
                video.style.transform = 'translate(0, 0)';
                // video.style.left = '0';
                video.style.zIndex = 4;
                video.tabIndex = 0;
                videoListStylization();
            };
            video.onclick = handleClick;
            video.onkeypress = (event) => {
                if (event.code === 'Enter' || event.code === 'Space') {
                    handleClick();
                }
            };
        })();
        const videoPlayButton = video.querySelector('.videoPresentation__video-playButton');
        const videoItem = video.querySelector('video');
        // play video when user clicks 'play' button
        const playVideo = () => {
            if (videoItem.requestFullscreen) {
                videoItem.requestFullscreen();
            } else if (videoItem.webkitRequestFullscreen) {
                /* Safari */
                videoItem.webkitRequestFullscreen();
            } else if (videoItem.msRequestFullscreen) {
                /* IE11 */
                videoItem.msRequestFullscreen();
            }
            videoItem.play();
            videoItem.setAttribute('controls', true);
        };
        videoPlayButton.onclick = playVideo;
        // pause video when user exits fullscreen mode
        if (videoItem.addEventListener) {
            videoItem.addEventListener('fullscreenchange', exitHandler, false);
            videoItem.addEventListener('mozfullscreenchange', exitHandler, false);
            videoItem.addEventListener('MSFullscreenChange', exitHandler, false);
            videoItem.addEventListener('webkitfullscreenchange', exitHandler, false);
        }
        function exitHandler() {
            if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
                videoItem.pause();
                videoItem.removeAttribute('controls');
            }
        }
    });
});

export default VideoPresentationSection;
