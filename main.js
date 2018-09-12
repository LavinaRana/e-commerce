$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});
// Add to cart

// initialize cart value at 0
var cartNumber = 0;

// listen, tally, display badge
$("#addToCart").click(function () {
    // prevent reload
    event.preventDefault();

    // store input as variable
    var additionalValue = $("#quantity").val();

    // Tally
    cartNumber = cartNumber + parseInt(additionalValue);

    // Change html
    $("#cartItems").html(cartNumber);

    // Show the badge
    $("#cartItems").show();
    cornify_add(cartNumber);
});

$("#signUp").click(function () {

    event.preventDefault();

    $("#signUpForm").hide();
    $("#signUpModal").html("Thanks for signing up! Here's a code for 10% off: THANKS10");
    $("#signUpLabel").html("Thank You!");

});

$('.similar-items-image').click(function () {
    $(this).toggleClass('shrinky-dink');
})