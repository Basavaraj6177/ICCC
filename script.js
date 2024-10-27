

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var navbar = document.getElementById("navbar");
        var headerHeight = document.querySelector(".conference-header").offsetHeight;

        // Check if the page is scrolled beyond the header height
        if (window.scrollY > headerHeight) {
            navbar.classList.add("fixed-top");
        } else {
            navbar.classList.remove("fixed-top");
        }
    };
});