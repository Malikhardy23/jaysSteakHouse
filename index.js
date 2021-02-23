// variables 

const menuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementsByClassName('mobileMenu');
const mobileMenuLinks = [
    document.getElementsByTagName("a")[5],
    document.getElementsByTagName("a")[6],
    document.getElementsByTagName("a")[7],
    document.getElementsByTagName("a")[8],
    document.getElementsByTagName("a")[9]
];


let clickedBtn = () => {
    mobileMenu[0].classList.toggle('active');
}

menuBtn.addEventListener('click', clickedBtn);