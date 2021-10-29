//This function resizes the top padding whenever the page is loaded or changes size - makes sure things aren't hidden behind navbar
// TODO: replace with js
$(window).resize(function () {
    $('.top-item').css('padding-top', parseInt($('.navbar').css("height"))+10);
    if ($(window).width() < 768) {
        $('#partypic').css('height', 200);
        $('#grouppic').css('height', 300);
        $('#corppic').css('height', 300);
        $('#sch1pic').css('height', 400);
        $('#sch2pic').css('height', 400);

    } else {
        $('#partypic').css('height', $('#party').height());
        $('#grouppic').css('height', $('#group').height());
        $('#corppic').css('height', $('#corp').height());
        $('#sch1pic').css('height', $('#sch1').height());
        $('#sch2pic').css('height', $('#sch2').height());
    }
});

$(window).on('load', function () {
    $('.top-item').css('padding-top', parseInt($('.navbar').css("height"))+10);
    if ($(window).width() < 768) {
        $('#partypic').css('height', 200);
        $('#grouppic').css('height', 300);
        $('#corppic').css('height', 300);
        $('#sch1pic').css('height', 400);
        $('#sch2pic').css('height', 400);

    } else {
        $('#partypic').css('height', $('#party').height());
        $('#grouppic').css('height', $('#group').height());
        $('#corppic').css('height', $('#corp').height());
        $('#sch1pic').css('height', $('#sch1').height());
        $('#sch2pic').css('height', $('#sch2').height());
    }
});