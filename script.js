

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

function changeReadMore() {
    const mycontent =
        document.getElementById('mybox1id');
    const mybutton =
        document.getElementById('mybuttonid');

    if (mycontent.style.display === 'none'
        || mycontent.style.display === '') {
        mycontent.style.display = 'inline';
        mybutton.textContent = 'read less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'read more...';
    }
}
