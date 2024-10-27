

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var navbar = document.getElementById("navbar");
        var header = document.querySelector(".conference-header");
        var headerHeight = header.offsetHeight;

        if (window.scrollY > headerHeight) {
            navbar.classList.add("fixed-top");
        } else {
            navbar.classList.remove("fixed-top");
        }
    });
});

