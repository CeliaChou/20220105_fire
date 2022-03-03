$(".frame").hover(function() {
    $("div[id=" + $(this).attr("data-light") + "]").addClass("light");
}, function() {
    $("div[id=" + $(this).attr("data-light") + "]").removeClass("light");
});