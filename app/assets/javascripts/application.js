// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .

var fieldVals = {};
var marginTop;
var o;
var margin;
var padding =50;
window.onload = function () {
    setTimeout(function () {

        if ($(window).width() > 992) {
            if (typeof $(".postInfo").offset() !== "undefined") {
                if ($("#mainImage").width() / $(window).width() < $("#mainImage").height() / $(window).height()) {
                    margin = ($(window).height() - (($("#mainImage").height() * $(window).width()) / $("#mainImage").width())) / 2;
                    var settings = {
                        top: "0",
                        margin: "0",
                        width: "100%"
                    };
                } else {
                    margin = ($(window).width() - (($("#mainImage").width() * $(window).height()) / $("#mainImage").height())) / 2;
                    var settings = {
                        top: "0",
                        margin: "0",
                        height: "100%",
                        width: "auto"
                    };
                }
                $("#mainImage").css("top", $(".postInfo").offset().top + $(".postInfo").height());
                $("#body").css("margin-top", $("#mainImage").height() + ($(".postInfo").height()/2));
                if ($("#backgroundTrig").length > 0) {
                    marginTop = $("#backgroundTrig").offset().top;
                }
                var backgroundTween = TweenMax.to("#mainImage", .01, settings);
                o.addTween("#backgroundTrig", backgroundTween, marginTop, -1 * marginTop);
            }
        } else {
            padding=0;
            if ($("#mainImage").width() / $(window).width() < $("#mainImage").height() / $(window).height()) {
                $("#mainImage").css("width", "100%");
            } else {
                $("#mainImage").css("height", "100%");
            }
            var navMain = $("#bs-example-navbar-collapse-1");

            navMain.on("click", "a", null, function () {
                navMain.collapse('hide');
            });
        }
    }, 0);
};
$(document).ready(function () {
    if ($(window).width() > 992) {
        if ($("#one").height() > $("#two").height()) {
            $("#one").css("height","auto");
            $("#two").css("height",$("#one").height());
        } else {
            $("#two").css("height","auto");
            $("#one").css("height",$("#two").height());
        }
        if ($(".indexPostImageRow").length > 0) {

            $(".indexPostImageRow").each(function (index, value) {
                $(this).find(".indexPostOpen").css("margin-top", -1 * ($(this).find(".indexPostOpen").height()));
            });
        }
    }
    $("#one").height() < $("#two").height() && $(window).width() > 767 && $("#one").css("height", $("#two").height() + "px");
    var i = TweenMax.to("#nav", .01, {background: "rgba(256, 256, 256,0.8)"}), e = {
        width: "25%",
        margin: "calc(75% - 25px)"
    };
    e["margin-left"] = "calc(75% - 25px)";
    o = $.superscrollorama({triggerAtCenter: !1, playoutAnimations: !0});
    var t = TweenMax.to("#no", .01, e);
    o.addTween("#trigger", i, 75, -75), o.addTween("#imageTrigger", t, 60, -15), $("#smallOne").height() > $("#largeOne").height() ? $("#largeOne").css("height", $("#smallOne").height()) : $("#smallOne").css("height", $("#largeOne").height()), $(".workTrig").click(function () {
        $("#work").animatescroll({padding: padding})
    }), $(".connectTrig").click(function () {
        $("#connect").animatescroll({padding: padding})
    }), $("#alexTrig").click(function () {
        $("#alex").animatescroll({padding: padding})
    });

    for (var l = $("textarea,input[type=text]").not(".editPost *"), n = 0; n < l.length; n++) {
        fieldVals[l[n].id] = $(l[n]).val();
    }
    $("textarea,input[type=text]").not(".editPost *").css("color", "rgba(0,0,0,.3)");
    $("textarea,input[type=text]").not(".editPost *").focus(function () {
        var i = fieldVals[this.id];
        i == $(this).val() && ($(this).val(""), $(this).css("color", "#36393B"))
    });
    $("textarea,input[type=text]").not(".editPost *").blur(function () {
        var i = fieldVals[this.id];
        (i == $(this).val() || "" == $(this).val()) && ($(this).val(i), $(this).css("color", "rgba(0,0,0,.3)"))
    })

});
$(window).resize(function () {
    if ($(window).width() > 992) {
        if ($("#one").height() > $("#two").height()) {
            $("#one").css("height","auto");
            $("#two").css("height",$("#one").height());
        } else {
            $("#two").css("height","auto");
            $("#one").css("height",$("#two").height());
        }
        padding=50;
        if ($(".indexPostImageRow").length > 0) {
            $(".indexPostImageRow").each(function (index, value) {
                $(this).find(".indexPostOpen").css("margin-top", -1 * ($(this).find(".indexPostOpen").height()));
            });
        }
        if (typeof $(".postInfo").offset() !== "undefined") {
            marginTop = $("#backgroundTrig").offset().top
            if ($("#mainImage").width() / $(window).width() < $("#mainImage").height() / $(window).height()) {
                margin = ($(window).height() - (($("#mainImage").height() * $(window).width()) / $("#mainImage").width())) / 2;
                var settings = {
                    top: "0",
                    margin: margin + "px 0 0 -12px",
                    width: "100%"
                };
            } else {
                margin = ($(window).width() - (($("#mainImage").width() * $(window).height()) / $("#mainImage").height())) / 2;
                console.log(margin)
                var settings = {
                    top: "0",
                    margin: "0 0 0 " + (-12 + margin) + "px",
                    height: "100%",
                    width: "auto"
                };
            }
        }
        $("#one").height() < $("#two").height() && $(window).width() > 768 && $("#one").attr("height", $("#two").height() + "px")
    } else {
        $("#one,#two").css("height","auto");
        padding=0;
        if ($("#mainImage").width() / $(window).width() < $("#mainImage").height() / $(window).height()) {
            $("#mainImage").css("width", "100%");
        } else {
            $("#mainImage").css("height", "100%");
        }
        $("#mainImage").css({margin: "0 0 0 -12px"})
        $(".indexPostImageRow").find(".indexPostOpen").css("margin-top","0");
    }
});
//= require turbolinks
