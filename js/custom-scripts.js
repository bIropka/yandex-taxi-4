$(window).ready(function () {

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
        }

        if (!$(event.target).closest(".select-options").length) {
            $('.select-options').removeClass('active');
        }

    });

    $('.custom-select .current-value').click(function() {

        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $('.custom-select').removeClass('active');
            $('.select-options').removeClass('active');
            $(this).parent().addClass('active');
        }

    });

    $('.select-city ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).children('span').text();
            var newPhone = $(this).find('a').html();
            var newLink = $(this).find('a').attr('href');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-city').find('.current-value').html(newCity);
            $(this).parents('.select-city').siblings('.link-phone').find('a').html(newPhone);
            $(this).parents('.select-city').siblings('.link-phone').find('a').attr('href', newLink);

            $(this).parents('.select-city').removeClass('active');

        }

    });

    $('.select-form ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newChoice = $(this).text();

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-form').find('.current-value').text(newChoice);
            $(this).parents('.select-form').find('.hidden-field').find('input').attr('val', newChoice);

            $(this).parents('.select-form').removeClass('active');

        }

    });

    $('.to-questionnaire').click(function() {
        $('html, body').animate({scrollTop: $('.questionnaire').offset().top}, 600);
    });

    $('.callback').click(function() {
        $('.window-callback').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.window').fadeOut();
        }
    });

    $('input[type="file"]').change(function() {

        var name = $(this).val().split('\\');
        $(this).parent().siblings('.text').html(name[name.length - 1]);

    });

});