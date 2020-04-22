// Responsive navigation code

const menuBtn = document.querySelector("#hamburger-menu");
const mobileMenu = document.querySelector("#mobile-menu");

// Mobile menu click handler
function menuBtnHandler(event) {
    event.preventDefault();
    mobileMenu.classList.toggle("open");
    this.classList.toggle("open");
    document.body.classList.toggle("open");

    if ( this.classList.contains("open") ) {
        //set X icon
        this.firstChild.setAttribute("name", "close");
    } else {
        //set menu icon
        this.firstChild.setAttribute("name", "menu");
    }
}

menuBtn.addEventListener("click", menuBtnHandler);

// // Sticky Navbar
// let scrollY = window.pageYOffset;
// let currScrollY;
// const navbar = document.querySelector(".navbar");
// window.addEventListener("scroll", function() {    
//     currScrollY = window.pageYOffset;
//     if(currScrollY > 300) {
//         navbar.style["boxShadow"] = "0 2px 6px #3209400F"
//     } else {
//         navbar.style["boxShadow"] = "none";
//     }
//     (scrollY > currScrollY) ? navbar.style.top = "0" : navbar.style.top = "-100%";
//     scrollY = currScrollY;
// });