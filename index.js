$(document).ready(function () {
    AOS.init();

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#sideNav'
    })

    $(".accordion-toggle").mouseover(function () {
        $(".accordion-toggle").trigger("click");
    });
});

window.addEventListener('scroll', function () {
    if (this.scrollY <= 40) {
        $('#about-nav-link').addClass('active');
    }

})

