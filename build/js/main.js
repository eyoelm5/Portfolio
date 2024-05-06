const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    const workwithme = document.getElementById('btn--landing-page')
    
    function contact(){
        window.location.href="./contact.html";
    }

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('block')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    workwithme.addEventListener('click', contact)
}


document.addEventListener('DOMContentLoaded', initApp)