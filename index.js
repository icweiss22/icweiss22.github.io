$(document).ready(function () {
    AOS.init();

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#sideNav'
    })

    var currentSection;
    $('#skills [data-bs-toggle="collapse"]').mouseover(function () {
        $(this).parents('.accordion-item').find('.collapse').collapse('show');
        currentSection = this;
        setTimeout(function () {
            $('button', $('.accordion-item h2')).not(currentSection).parents('.accordion-item').find('.collapse').collapse('hide');
        }, 500);
        
    });

});

window.addEventListener('scroll', function () {
    if (this.scrollY <= 40) {
        $('#about-nav-link').addClass('active');
    }

})

