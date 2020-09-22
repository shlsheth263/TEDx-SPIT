$(document).ready(function() {
    var height = document.body.clientHeight;
    var eventDate = new Date(2020, 01, 09);
    console.log(eventDate);

    var today = new Date();
    console.log(today);

    var remainingDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    document.getElementsByClassName("countdown")[0].innerText = remainingDays + " Days To Go!";

    // console.log(remainingDays);

    var factor = 0;

    // if(remainingDays >= 0 && remainingDays <= 30){
    //     if(remainingDays < 15){
    //         factor = 1.99;
    //     } else {
    //         factor = 1.95;
    //     }

    //     var top = ((30.5 + remainingDays*factor) / 100)*height;

    //     $(".day").css("top", top);
    // } else if(remainingDays >= 1) {
    //     $(".day").css("top", 0.9*height);
    // } else{
    //     $(".day").css("top", 0.305*height);
    // }
});