var eventDate = new Date(2020, 09, 13);
var today = new Date();
var remainingDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
$(".landing-countdown").text(remainingDays + " Days To Go!")
    // document.getElementsByClassName("landing-countdown")[0].innerText = remainingDays + " Days To Go!";

// console.log(remainingDays);

var factor = 0;

$(".landing-next-btn-link").click(e => {
    console.log("Helo");
    $(".landing-next-btn").css("display", "none");
    $(".days-remaining").css({
        "animation-delay": "0s",
        "animation": "fadeOutContent ease 3s"
    });
    $(".landing-content").css({
        "animation-delay": "0.5s",
        "animation": "fadeOutContent ease 3s"
    });
    $(".layer-three").css({
        "animation-delay": "1s",
        "animation": "moveDown ease 3s"
    });
    $(".layer-two").css({
        "animation-delay": "1.5s",
        "animation": "moveDown ease 3s"
    });
    $(".building").css({
        "animation-delay": "2s",
        "animation": "moveDown ease 3s"
    });
    $(".landing-container").css({
        "animation": "hide ease 3s",
        "animation-iteration-count": "1",
        "animation-fill-mode": "forwards",
        "animation-delay": "2.5s",
    });
});