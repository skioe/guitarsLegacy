$(".intro__content").hover(
    function () {
        $(".intro__title").fadeIn(1700)
    }
);

$(".intro__title").hover(
    function () {
        $(".intro__title").animate(
            {"top":"-265px"},
            2000,
            "easeOutQuad",
            function () {
                $(".title__welcome").fadeIn(1500,
                    function () {
                        $(".arrow__container").fadeIn(1500)
                    })
            }
        )
    }
);

$( ".arrow__container")
    .hover(
    function () {
        $(".arrow__container").animate(
            {"bottom": "3%"}
        )
    },
    function () {
        $(".arrow__container").animate(
            {"bottom": "6%"}
        )
    }
)   .click(
    function () {
        $(".intro").slideUp(
            1350
        )
    }
);







    
