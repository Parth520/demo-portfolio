$(".hi").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
});
$(".para").hide();
$("button").click(function() {
    $(".hi").fadeOut("slow");
    $(".hi").hide();
    $(".para").show();
    $(".para").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
});