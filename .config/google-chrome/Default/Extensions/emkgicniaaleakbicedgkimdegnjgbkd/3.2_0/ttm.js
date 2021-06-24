// TODO - having a stream close and autoplaying a non-chatted old video
// TODO - auto-twitchmode if going from disabled chat channel to live chat channel
// TODO - think about case where a stream will be live in the future but there is still a chat window causing it to be in full theater mode
// TODO - binding on theater mode button doesn't seem to happen when clicking on live now in right-hand sidebar
// TODO - similar to above, rebind not working when going from new tab to left hand bar channel -> videos -> video, example: https://www.youtube.com/watch?v=S6YMg18THjo

var adjust = () => {
    $("#masthead-container").hide();
    $("#related").hide();
    $("html").css("overflow", "hidden");
    $("#page-manager").css("margin-top", "0px");

    $("#player-theater-container").css({
        "width": "calc(100% - 400px)",
        "height": "100vh",
        "max-height": "none"
    });

    window.dispatchEvent(new Event('resize'));
}

var tryChat = (attempts) => {
    if (attempts < 0) return;
    setTimeout(() => { 
        if ($("#chatframe").length) {

            adjust();

            $("#chatframe").css({
                "height": "100vh",
                "width": "400px",
                "position": "absolute",
                "right": "0px",
                "top": "0px"
            });
            if ($("#columns > #primary").length) {
                $("#chatframe").insertAfter("#columns > #primary");
            } else {
                $("#chatframe").insertAfter("#primary:visible");
                /*setTimeout(() => { 
                    $("ytd-live-chat-frame").insertAfter("#columns > #primary"); 
                    $("ytd-live-chat-frame").insertAfter("#primary:visible"); 
                    $("ytd-live-chat-frame").removeAttr("collapsed");
                    $("#primary").hide();
                }, 50);*/
            }


        } else {
            tryChat(attempts - 1);
        }
    }, 25);
}

var trySecondary = (attempts) => {
    if (attempts < 0) return;
    setTimeout(() => { 
        if ($("#secondary").length) {
            $("#secondary")[0].style.cssText = "filter: none !important"; 
        } else {
            trySecondary(attempts - 1);
        }
    }, 25);
}

var tryButton = (attempts, ifFunc, thenFunc) => {
    if (attempts < 0) return;
    setTimeout(() => { 
        if ($("#chat").length) {
            if (ifFunc()) thenFunc();
        } else {
            if (!$(".ytp-size-button").length) attempts /= 2;
            tryButton(attempts - 1, ifFunc, thenFunc);
        }
    }, 25);
}

var tryAvatar = (attempts) => {
    if (attempts < 0) return;
    setTimeout(() => { 
        if ($("#top-row a.ytd-video-owner-renderer img").attr("src")) {
            $("#ttm-info img").attr("src", "" + $("#top-row a.ytd-video-owner-renderer img").attr("src"));
        } else {
            tryAvatar(attempts - 1);
        }
    }, 200);
}

var inTheater = () => {
    if (!$("#chat").length) {
        return false;
    }
    if ($(".ytp-size-button:visible").attr("title")) {
        return ($(".ytp-size-button:visible").attr("title").toLowerCase().indexOf("default") >= 0)
    }
    if ($(".ytp-size-button.ytp-button").attr("title")) {
        return ($(".ytp-size-button.ytp-button").attr("title").toLowerCase().indexOf("default") >= 0)
    }

    return (
        $("#player-theater-container:visible").children().length > 0 && 
        $("#player-theater-container:visible").css("width") != $("#player-theater-container:visible").parent().css("width")
    );
}

var onTheater = () => {
    // Don't twitchmode if live stream says that chat is disabled
    if ($("ytd-message-renderer:visible").text().indexOf("disabled") >= 0) return;

    document.documentElement.scrollTop = 0;

    if ($("#ttm-info").length == 0) {
        $(".ytp-left-controls").append(`
            <div id='ttm-info' style='margin:20px; position:fixed; top:0px; left:0px; width:100%'>
                <div id='ttm-block' style='display:inline; position:absolute; width:100%; top:2px'>
                    <div id='ttm-name' style='font-size:18px; line-height:18px'/>
                    <div id='ttm-title' style='font-size:14px; position:absolute; top:22px; left:0px; line-height:14px'/>
                    <div id='ttm-watchers' style='font-size:14px; position:absolute; top:39px; left:0px; line-height:14px'/>
                </div>
            </div>
        `);

        $('#info-contents').on('DOMSubtreeModified', 'yt-view-count-renderer', function(){
            $("#ttm-info img").attr("src", $("#top-row a.ytd-video-owner-renderer img").attr("src"));
            $("#ttm-info a").attr("href", $("#top-row a.ytd-video-owner-renderer").attr("href"));
            $("#ttm-name").text($("ytd-video-owner-renderer yt-formatted-string.ytd-channel-name").text());
            $("#ttm-title").text($("ytd-video-primary-info-renderer h1").text());
            $("#ttm-watchers").text($("yt-view-count-renderer .view-count").text());
        });
        
        $("a.ytd-video-owner-renderer").clone().prependTo("#ttm-info");
        $("#ttm-info img").css("visibility", "visible");
        $("#ttm-info img").attr("width", "64");
        $("#ttm-info #avatar").css("width", "64px");
        $("#ttm-info #avatar").css("height", "64px");
    }

    tryAvatar(200);
    $("#ttm-info a").attr("href", $("#top-row a.ytd-video-owner-renderer").attr("href"));
    $("#ttm-name").text($("ytd-video-owner-renderer yt-formatted-string.ytd-channel-name").text());
    $("#ttm-title").text($("ytd-video-primary-info-renderer h1").text());
    $("#ttm-watchers").text($("yt-view-count-renderer .view-count").text());
    $("#ttm-info").show();

    adjust();
    tryChat(25);
    trySecondary(10);
}

var unTheater = () => {
    $("#masthead-container").show();
    $("#related").show();
    $("#primary").show();
    $("html").css("overflow", "inherit");
    $("#page-manager").css("margin-top", "");
    $("#player-theater-container").css({
        "width": "",
        "height": "",
        "max-height": "",
    });
    $("#chatframe").css({
        "height": "",
        "width": "",
        "position": "relative",
    });

    window.dispatchEvent(new Event('resize'));

    $("#ttm-info").hide();

    setTimeout(() => { 
        $("#secondary")[0].style.cssText = "filter: none !important"; 
        $("#chatframe").prependTo("#chat");
        $("ytd-live-chat-frame").prependTo("#secondary-inner");
    }, 25);

    if ($("ytd-live-chat-frame .ytd-toggle-button-renderer").text().toLowerCase().indexOf("show") > -1) {
        setTimeout(() => { $("ytd-live-chat-frame").attr("collapsed", true); }, 100);
    }
}

var doTheater = (reversal) => {
    if (!$("#chat").length) return;
    setTimeout(() => { $("#secondary")[0].style.cssText = "filter: none !important"; }, 25);

    var doIt = !inTheater();
    if (reversal) doIt = !doIt;

    if (doIt) {
        onTheater();
    } else {
        unTheater();
    }
}

var isFullScreen = () => {
    return $("#player-theater-container").css("width") == ((window.innerWidth+1)+"px");
}

var doFullScreen = () => {
    if (!$("#chat").length) return;
    if (isFullScreen() && inTheater()) {
        onTheater();
    } else {
        unTheater();
    }
}

// when refreshing, maintain theater mode
tryButton(25, inTheater, onTheater);
window.onpopstate = function(event) {
    unTheater();
    tryButton(25, inTheater, onTheater);
    document.documentElement.scrollTop = 0;
};

var bindBtn = () => {
    $(".ytp-size-button").bind("click", () => {
        doTheater();
    });
    $(".ytp-fullscreen-button").bind("click", () => {
        doFullScreen();
    });
}

setTimeout(bindBtn, 100); 

// when entering a youtube link internally
var secureLinks = () => {
    $("a").bind("click", () => { 
        setTimeout(() => { 
            bindBtn(); 
            tryButton(25, inTheater, onTheater);
            secureLinks();
        }, 200); 
    });
}

setTimeout(secureLinks, 100); 

$(document).keydown(function(e){
    if (e.which == 70) { //f
        doFullScreen();
    }
    if (e.which == 84) { //t
        setTimeout(() => {
        
            if (isFullScreen() && !inTheater()) {
                doTheater();
            } else {
                doTheater(true);
            } 

        }, 5); 
    }
});
