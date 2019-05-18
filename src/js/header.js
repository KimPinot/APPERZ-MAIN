$(function() {

    var modal = 0;

    function modalon() {
        $('html').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    }

    function modaloff() {
        $('html').css({
            'overflow': 'scroll',
            'height': '100%'
        });
    }

    $("#button").click(function () {
        $(".header-menu").slideToggle(500);

        if (modal == 0) {
            modalon()
            modal = 1
        } else {
            modaloff()
            modal = 0
        }

    });

    $(".header_background").click(function () {
        $(".header-menu").slideUp(500);
        modaloff()
        modal--
    });
});
