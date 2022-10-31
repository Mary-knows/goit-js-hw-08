import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});

player.on('play', function() {
});




const STORAGE_KEY = "videoplayer-current-time";

const onPlay = throttle((data) => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
}, 1000);


player.on('timeupdate', onPlay);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function (seconds) {
});