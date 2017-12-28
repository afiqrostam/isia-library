console.time('commons');
$(function() {
    $("#nav-accordion").dcAccordion({
        eventType: "click",
        autoClose: !0,
        saveState: !0,
        disableLink: !0,
        speed: "slow",
        showCount: !1,
        autoExpand: !0,
        classExpand: "dcjq-current-parent"
    })
});
var Script = function() {
    $("#sidebar .sub-menu > a").click(function() {
        var r = $(this).offset();
        diff = 250 - r.top, diff > 0 ? $("#sidebar").scrollTo("-=" + Math.abs(diff), 500) : $("#sidebar").scrollTo("+=" + Math.abs(diff), 500)
    }), $(function() {
        function r() {
            var r = $(window).width();
            768 >= r && ($("#container").addClass("sidebar-close"), $("#sidebar > ul").hide()), r > 768 && ($("#container").removeClass("sidebar-close"), $("#sidebar > ul").show())
        }
        $(window).on("load", r), $(window).on("resize", r)
    }), $(".fa-bars").click(function() {
        $("#sidebar > ul").is(":visible") === !0 ? ($("#main-content").css({
            "margin-left": "0px"
        }), $("#sidebar").css({
            "margin-left": "-210px"
        }), $("#sidebar > ul").hide(), $("#container").addClass("sidebar-closed")) : ($("#main-content").css({
            "margin-left": "210px"
        }), $("#sidebar > ul").show(), $("#sidebar").css({
            "margin-left": "0"
        }), $("#container").removeClass("sidebar-closed"))
    }), $("#sidebar").niceScroll({
        styler: "fb",
        cursorcolor: "#4ECDC4",
        cursorwidth: "3",
        cursorborderradius: "10px",
        background: "#404040",
        spacebarenabled: !1,
        cursorborder: ""
    }), $("html").niceScroll({
        styler: "fb",
        cursorcolor: "#4ECDC4",
        cursorwidth: "6",
        cursorborderradius: "10px",
        background: "#404040",
        spacebarenabled: !1,
        cursorborder: "",
        zindex: "1000"
    }), $(".tooltips").tooltip(), $(".popovers").popover()
}();
console.timeEnd('commons');
