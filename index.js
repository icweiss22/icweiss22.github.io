$(document).ready(function () {
    AOS.init();

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#sideNav'
    })

    $(".accordion-item h2").mouseover(function () {
        $('accordion-item h2 button', ).not(this).trigger('click');
        $('button', this).trigger("click");
    });

});

window.addEventListener('scroll', function () {
    if (this.scrollY <= 40) {
        $('#about-nav-link').addClass('active');
    }

})

