const hamburger = document.querySelector('.hamburger');
const headerWrap = document.querySelector('.header__wrapper');
const track = document.querySelector('.instruction__video-track');
const dots = document.querySelectorAll('.instruction__video-circle');


// hamburger

hamburger.addEventListener('click', () => {
    openHamburger()
    hamburgerLine()
})

function openHamburger() {
    headerWrap.classList.toggle('header__wrapper_active')
}

function hamburgerLine(){
    hamburger.classList.toggle('hamburger_active')
}

// carousel 

for(let i = 0; i< dots.length; i++){
    dots[i].addEventListener('click', (e) => {
        // track.style.transform = 'translateX(-200%)';
        if(e.target === dots[0]){
            track.style.transform = 'translateX(0%)';
        }
        if(e.target === dots[1]){
            track.style.transform = 'translateX(-100%)';
        }
        if(e.target === dots[2]){
            track.style.transform = 'translateX(-200%)';
        }
        if(e.target === dots[3]){
            track.style.transform = 'translateX(-300%)';
        }
        if(e.target === dots[4]){
            track.style.transform = 'translateX(-400%)';
        }
        if(e.target === dots[5]){
            track.style.transform = 'translateX(-500%)';
        }
        if(e.target === dots[6]){
            track.style.transform = 'translateX(-600%)';
        }
        if(e.target === dots[7]){
            track.style.transform = 'translateX(-600%)';
        }
        if(e.target === dots[8]){
            track.style.transform = 'translateX(-800%)';
        }
        if(e.target === dots[9]){
            track.style.transform = 'translateX(-900%)';
        }
    })
}