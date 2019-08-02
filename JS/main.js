$(document).ready(function () {
    $(".intro__content").hover(
        function () {
            $(".intro__title").fadeIn(1700)
        }
    );
});

$(".intro__title").hover(
    function () {
        $(".intro__title").animate(
            {"top":"-205%"},
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

$( ".arrow")
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
            1700
        );
        $(".main").fadeIn(
            500,
            function () {
                $(".card_1_com").fadeIn(
                    700,
                    function () {
                        $(".card_2_com").fadeIn(
                            700,
                            function () {
                                $(".card_3_com").fadeIn(
                                    700,
                                    function () {
                                        $(".card_4_com").fadeIn(
                                            700
                                        ).css("display", "flex")
                                    }
                                ).css("display", "flex")
                            }
                        ).css("display", "flex")
                    }
                ).css("display", "flex")
            }

        );
    }
);

$(".card_3_com")
    .click(
        function () {
            /*$(".row__huge").css({
                "height": "120%"
            })*/
            $(".row__huge").animate(
                {"height": "40%"},
                600,
                "swing",
                function () {
                    $(".card_3__title__wrap").animate(
                        {"top":"-33%"},
                        1000,
                        "easeOutSine",
                        function () {
                            $(".card_3_list_wrap").fadeIn(
                                700
                            )
                        }
                    )
                }

            )
        }
    );

$(".card_4_com")
    .click(
        function () {
            $(".row_2").animate(
                {"height": "35%"},
                600,
                "swing",
                function () {
                    $(".card_4__title__wrap").animate(
                        {"top":"-33%"},
                        1000,
                        "easeOutSine",
                        function () {
                            $(".card_4_list_wrap").fadeIn(
                                700
                            )
                        }
                    )
                }

            )
        }
    );
/*$(".card_3__title__wrap").click(
    function () {
        $(".card_3_list_wrap").fadeOut(
            300,
            function () {
                $(".card_3__title__wrap").animate(
                    {"top":"none"},
                    400,
                    "easeOutSine",
                    function () {
                        $(".card_3_com").animate(
                            {"height": "100%"},
                            600
                        )
                    }
                )
            }

        )
    }
);*/

$(".arrow_card").click(
    function () {
        $(".card_3").slideUp
    }
)