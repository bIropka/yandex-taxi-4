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

        if($(this).hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $('.custom-select').removeClass('active');
            $('.select-options').removeClass('active');
            $(this).parent().addClass('active');
        }

    });

    $('.select-city ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).find('span').text();
            var newPhone = $(this).find('a').text();
            var newLink = $(this).find('a').attr('href');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-city').find('.current-value').text(newCity);
            $(this).parents('.select-city').siblings('.link-phone').find('a').text(newPhone);
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

    $('.select-options .current-value').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.select-options ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newChoice = $(this).text();
            var newIndex = $(this).index();
            var optionsWrapper = $(this).parents('.select-options').siblings('.additional-options');

            $(this).addClass('active');
            $('<div class="option-item">' + newChoice + '<div class="option-close"></div></div>').attr('id', 'item#' + newIndex).appendTo(optionsWrapper);

            $(this).parents('.select-options').removeClass('active');

        }

    });

    $('html').on('click', '.option-close', function() {
        var curNumber = $(this).parent().attr('id').split('#')[1];
        $(this).parent().detach();
        $('.select-options ul li').eq(curNumber).removeClass('active');
    });

    $('.fill-in-questionnaire').click(function() {
        $('html, body').animate({scrollTop: $('.questionnaire').offset().top - 50}, 600);
    });

    $('.callback').click(function() {
        $('.window-callback').fadeIn();
    });

    $('.ask-question').click(function() {
        $('.window-question').fadeIn();
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

});