// Web Page Reference Script

// Content Menu Click Event
$(".contents a").on("click", loadContents);

function loadContents() {
    // Get & Load File corresponding to clicked link
    let fileName = "ref-pages/" + $(this).attr("id") + ".html";
    console.log(fileName);
    $(".ref-content").load(fileName);

    // Clear active class and set parent li of clicked link to active
    $(".contents li").removeClass("active-li");
    $(this).parent().addClass("active-li");
}

// Toggle Back to Top Arrow on Scroll Event
$(document).on("scroll", toggleScrollArrow);

function toggleScrollArrow() {
    let scrollPos = $(document).scrollTop();

    if (scrollPos > 100) {
        $(".scroll-arrow").fadeIn();
    } else {
        $(".scroll-arrow").fadeOut();
    }
}

// Scroll to top when Back to Top Arrow is Clicked
$(".scroll-arrow").on("click", scrollToTop);

function scrollToTop() {
    console.log("scrollToTOp");
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
}