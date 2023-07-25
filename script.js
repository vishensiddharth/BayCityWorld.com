//Scrolled NavBar color Changing

const navE1 = document.querySelector('.navbar');
const scrollbtn = document.getElementById('Layer_1');
const welcome_msg = document.getElementById('welcome-text')


window.addEventListener('scroll', ()=> {
    if (window.scrollY >= 56) {
        navE1.classList.add('navbar-scrolled');
    } else if(window.scrollY < 56){
        navE1.classList.remove('navbar-scrolled');
    }
});

//onclick Scroll

scrollbtn.addEventListener('click', ()=> {
    welcome_msg.scrollIntoView({ behavior: "smooth", block: "center" })   
});