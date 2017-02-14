/////////////////////////////////////////////////////////////////////
// Contact Form AJAX via Formspree.io
/////////////////////////////////////////////////////////////////////

$(document).ready(function() {

    // $("#contact-form").validate({
    //   submitHandler: function(form) {


        $('#contact-form').submit(function(e) {

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var message = $('#message').val();

        // // validate via jquery
        // $("#contact-form").validate();

        //send to formspree
        $.ajax({
            url:'https://formspree.io/info@arionconsultingcollective.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                email:email,
                message:message,
                _subject:'Inquiry - Arion Consulting Collective',
            },
            dataType:"json",
            success:function() {
                console.log('success');
                // $('#formBlock').hide();
                $('#thankyouBlock').fadeIn();
            },
            error: function() {
                console.log('error');
                $("#submit-errors").fadeIn();
            }

        });
    });
});



/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -64
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});



///////////////////////////////////////////
// Display loading image while page loads
///////////////////////////////////////////

// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".page-loader").fadeOut("slow");
});



////////////////////////////////////////////////////////////////////
// Stellar (parallax): https://github.com/markdalgleish/stellar.js
////////////////////////////////////////////////////////////////////

$.stellar({
    // Set scrolling to be in either one or both directions
    horizontalScrolling: false,
    verticalScrolling: true,
});



///////////////////////////////////////////////////////////
// WOW animation scroll: https://github.com/matthieua/WOW
///////////////////////////////////////////////////////////

new WOW().init();



////////////////////////////////////////////////////////////////////////////////////////////
// Counter-Up (requires jQuery waypoints.js plugin): https://github.com/bfintal/Counter-Up
////////////////////////////////////////////////////////////////////////////////////////////

// $('.counter').counterUp({
//     delay: 10,
//     time: 2000
// });



////////////////////////////////////////////////////////////////////////////////////////////
// Isotop Package
////////////////////////////////////////////////////////////////////////////////////////////
// $(window).load(function() {
// $('.portfolio_menu ul li').click(function(){
// 	$('.portfolio_menu ul li').removeClass('active_prot_menu');
// 	$(this).addClass('active_prot_menu');
// });

// var $container = $('#portfolio');
// $container.isotope({
//   itemSelector: '.col-sm-4',
//   layoutMode: 'fitRows'
// });
// $('#filters').on( 'click', 'a', function() {
//   var filterValue = $(this).attr('data-filter');
//   $container.isotope({ filter: filterValue });
//   return false;
// });
// });



/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});



////////////////////////////////////////////////////////////////////
// Close mobile menu when click menu link (Bootstrap default menu)
////////////////////////////////////////////////////////////////////

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});








