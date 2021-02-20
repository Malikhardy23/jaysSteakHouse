// variables 

const menuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = [
    document.getElementsByTagName("a")[5],
    document.getElementsByTagName("a")[6],
    document.getElementsByTagName("a")[7],
    document.getElementsByTagName("a")[8],
    document.getElementsByTagName("a")[9]
];
console.log(mobileMenuLinks);


//const mobileMenuKids = mobileMenu.children;
//console.log(mobileMenuKids);

/* menuBtn.addEventListener('click', () => {
    if(mobileMenu.style.display == "flex"){
        mobileMenu.style.display = "none";
    } else {
        //mobileMenu.style.padding = "50px";
        mobileMenu.style.display = "flex";
    }
}) */

const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);