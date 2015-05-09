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
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var fieldVals = {};

$(window).ready( function() {
    if ($("#one").height() < $("#two").height() && $(window).width() > 767) {
        $("#one").css("height",$("#two").height() + "px")
    }
    var colorTween = TweenMax.to('#nav', 0.01, {
        background: 'rgba(256, 256, 256,0.8)'
    });
    var list = {
        width:"25%",
        margin:"calc(75% - 25px)"
    };
    list["margin-left"] = "calc(75% - 25px)";

    var sizeTween = TweenMax.to('#mobileLogo', 0.01, list);
    var controller = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: true
    });
    controller.addTween('#trigger', colorTween, 75,-75);
    controller.addTween('#trigger', sizeTween, 60, -15);

    if ($("#smallOne").height() > $("#largeOne").height()) {
        $("#largeOne").css("height",$("#smallOne").height())
    } else {
        $("#smallOne").css("height",$("#largeOne").height())
    }

    $("#workTrig").click(function () {
        $('#work').animatescroll({padding: 50});
    });
    $("#connectTrig").click(function () {
        $('#connect').animatescroll({padding: 50});
    });
    $("#alexTrig").click(function () {
        $('#alex').animatescroll({padding: 50});
    });

    var fieldSelector = $("textarea,input[type=text]");
    for (var i = 0; i < fieldSelector.length; i++) {
        fieldVals[fieldSelector[i].id] = $(fieldSelector[i]).val();
    }

    $("textarea,input[type=text]").focus( function() {
        var fieldVal = fieldVals[this.id];
        if (fieldVal == $(this).val()) {
            $(this).val("");
            $(this).css("color","#36393B");
        }
    });

    $("textarea,input[type=text]").blur( function() {
        var fieldVal = fieldVals[this.id];
        if (fieldVal == $(this).val() || $(this).val() == "") {
            $(this).val(fieldVal);
            $(this).css("color","rgba(0,0,0,.3)");
        }
    });
    $("#mobileLogo").click( function() {
        if ($(window).width() < 768) {
            $(".container-fluid").css("position","absolute");
            $("body").css({padding:"0",overflow:"hidden"});
            $("#mobileNav").css("display","inline");
            $("#mobileNav").css("margin-top",$(window).scrollTop());
            $("#mobileNav").css({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight});
            $("#mobileList").css("margin-top",(document.documentElement.clientHeight - $("#mobileList").height())/2);
            $("#mobileNav li").click( function() {
                $(".container-fluid").css("position","static");
                $("body").css({padding:"15",overflow:"scroll"});
                $("#mobileNav").css("display","none");
                $("#" + this.id.replace("mobile","").toLowerCase() + "Trig").click();
                $("#mobileNav").off("click")
            });
            $("#mobileNav").click( function() {
                $(".container-fluid").css("position","static");
                $("body").css({padding:"15",overflow:"scroll"});
                $("html").css("overflow","scroll");
                $("#mobileNav").css("display","none");
                $("#mobileNav li").off("click")
            })
        }
    })
});
$(window).resize( function() {
    if ($("#one").height() < $("#two").height() && $(window).width() > 768) {
        $("#one").attr("height",$("#two").height() + "px")
    }
});
