function toggleResetBtn(){
    const resetBtn = document.querySelector('.reset');
    resetBtn.classList.toggle('active');
}


function switchBanner(name) {
    const banner = document.querySelector('#banner');
    if (!banner.classList.contains(name)) {
        banner.className = 'banner';
        banner.classList.add(name);
        toggleResetBtn();

    }
    return;
}


function resetBanner() {
    const banner = document.querySelector('#banner');
    banner.className = 'banner';
    toggleResetBtn();
}

const selectHeader = document.querySelector('#header');
const backToTop = document.querySelector('.back-to-top');

if(selectHeader) {
    const headerScrolled = () => {
        if(window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled');
            backToTop.classList.add('active');
        } else {
            selectHeader.classList.remove('header-scrolled');
            backToTop.classList.remove('active');
        }
    };
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll', headerScrolled);
}


function scrollToTop() {
    window.scrollTo(0, 0);
}