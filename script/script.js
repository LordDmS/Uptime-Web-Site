// Gestion de menu

const menuhamburger = document.querySelector(".menuhamburger")
const ban = document.querySelector(".banniere")

menuhamburger.addEventListener('click',()=>{
    ban.classList.toggle('mobile-menu')
})

//fin