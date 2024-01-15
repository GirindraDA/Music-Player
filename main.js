const progress = document.querySelector('#progress');
const song = document.querySelector('#song');
const ctrlIcon = document.querySelector('#ctrlIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains('fa-record-vinyl')){
        song.pause();
        ctrlIcon.classList.remove('fa-record-vinyl');
        ctrlIcon.classList.add('fa-play');
    }else{
        song.play();
        ctrlIcon.classList.add('fa-record-vinyl');
        ctrlIcon.classList.remove('fa-play');
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-record-vinyl');
    ctrlIcon.classList.remove('fa-play');
}