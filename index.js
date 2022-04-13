$(document).ready(function () {
    AOS.init();

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#sideNav'
    })


});

window.addEventListener('scroll', function () {
    if (this.scrollY === 0) {
        $('#about-nav-link').addClass('active');
    }

})

