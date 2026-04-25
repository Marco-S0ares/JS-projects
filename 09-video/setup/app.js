
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const prealoarder = document.querySelector('.preloader');

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide')
        video.play();
    }
});

window.addEventListener('load', function(){
    prealoarder.classList.add('hide-preloader')
});
