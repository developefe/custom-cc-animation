// For turning cc
$('.scene .card .card-face .clickable').on('click', function () {
    $('.scene .card').toggleClass('turn');
    $('.scene .card .card-face').toggleClass('active');
});


$('input#card-number').on('input', function () {
    var val = $(this).val()
    .replace(/[^\dA-Z]/g, "") // Only numbers
    .replace(/(\+\d{3})\d{7}/,"$1*******")
    .replace(/(.{4})/g, "$1 ") // Put a space after every 4th numbers
    .trim();
    // ^ Here we replace non-number chars with numbers

    // If values length is bigger than zero update inputs value and change divs html with new value 
    if (val.length > 0) {
        $(this).val(val);
        $('.scene .card .card-face .cc-number').html(val)
    }
});

$('input#card-holder').on('input', function () {
    var val = $(this).val()
    .replace(/[^\a-z A-Z]/g, "") // Only letters a to z with spaces
    

    if (val.length > 0 && val.split("")[0] != ' ') {
        $(this).val(val);
        $('.scene .card .card-face.front .card-holder p').html(val)
    }
});

$('input#exp').on('input', function () {
    var val = $(this).val()
    .replace(/[^\dA-Z]/g, "") // Only numbers
    .replace(/(.{2})/, "$1/") // Put "/" after second char
    .trim();
    

    if (val.length > 0 && val.split("")[0] != ' ') {
        $(this).val(val);
        $('.scene .card .card-face.front .expiry-date p').html(val)
    }
});

$('input#ccv').on('input', function () {
    var val = $(this).val()
    .replace(/[^\dA-Z]/g, "")
    .trim();
    
    if (val.length > 0) {
        $(this).val(val);
        $('.scene .card .card-face .ccv p').html(val)
    }
});

// Just for animation :d
function entrance() {
    setTimeout(() => {
        $('.scene .card').removeClass('start-2');
        setTimeout(() => {
            $('.scene .card').removeClass('start')
        }, 1500);
    }, 500);
}

entrance();

$('.scene .submit').on('click', function () {
    $('.scene .card').removeClass('turn');
    $('.scene .card .card-face.front').addClass('active');
    $('.scene .card .card-face.back').removeClass('active');
    $('.scene .card').addClass('exit');
    $('.scene .submit').css('pointer-events', 'none');

    setTimeout(() => {
        $('.scene .card').css({'opacity': 0, 'visibility': 'hidden'});
        setTimeout(() => {
            $('.scene .card').removeClass('exit');
            $('.scene .card').addClass('start start-2');

            $('.datas input').val('');
            $('.scene .card .card-face .cc-number').html('5555 5555 5555 5555');
            $('.scene .card .card-face.front .card-holder p').html('EFE ISIK');
            $('.scene .card .card-face.front .expiry-date p').html('07/19');
            $('.scene .card .card-face .ccv p').html('000');
            
            setTimeout(() => {
                $('.scene .card').css({'opacity': 1, 'visibility': 'visible'});
                entrance();
                setTimeout(() => {
                    $('.scene .submit').css('pointer-events', 'all');
                }, 800);
            }, 500);
        }, 1250);
    }, 1500);
});