;(function ($) {

    $.fn.shiftLetters = function (options) {

        var settings = $.extend({
            minOffset: 2,
            maxOffset: 5,
            easing: 'swing',
            duration: 800,
        }, options);

        return this.each(function() {

            var letters = $(this).text().trim().split('');
            var $container = $('<div/>').css('height', '1em');
            var $this = $(this);

            $(letters).each(function(index){

                if (this[0] == ' ')
                {
                    $container.append(' ');
                    return;
                }

                var offset = Math.round(Math.random() * (settings.maxOffset - settings.minOffset) + settings.minOffset);
                var maskHeight = (offset - 1) * 2 + 1;
                var sign = index % 2 ? 1 : -1;

                $mask = $('<p/>').css({
                    display: 'inline-block',
                    verticalAlign: 'top',
                    margin: '0',
                    marginTop: Math.floor(maskHeight / 2) * -1 + 'em',
                    height: maskHeight + 'em',
                    overflowY: 'hidden',
                });

                $('<i/>', {
                    text: this[0],
                }).css({
                    fontStyle: 'normal',
                    position: 'relative',
                    top: (index % 2 ? -2 : maskHeight+2) + 'em',
                }).appendTo($mask).delay(100).animate({
                    top: offset - 1 + 'em',
                }, {
                    duration: settings.duration,
                    easing: settings.easing,//'easeOutQuint',
                });

                $mask.appendTo($container);

                // setTimeout(function(){
                //     $this.text(letters.join(''));
                // }, 900);

            });

            $(this).html($container);

        });

    };

})(jQuery);
