// variables 

const menuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuKids = mobileMenu.children;
console.log(mobileMenuKids);
mobileMenuKids.style.padding = "50px";

menuBtn.addEventListener('click', () => {
    if(mobileMenu.style.display == "block"){
        mobileMenu.style.padding = "10px";
        mobileMenu.style.display = "none";
    } else {
        //mobileMenu.style.padding = "50px";
        mobileMenu.style.display = "block";
    }
})