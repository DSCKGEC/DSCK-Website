// *** TO BE CUSTOMISED ***
//<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
var style_cookie_name = "style";
var style_cookie_duration = 30;
var style_domain = "dsckgec.ml";

var style_state = 'Light'

function toggleStyle() {
    if (style_state == 'Light') {
        switch_style('Dark')
        style_state = 'Dark';
        document.getElementById("logo-main").src = "./resources/images/logo-lm.png";
    } else {
        switch_style('Light')
        style_state = 'Light';
        document.getElementById("logo-main").src = "./resources/images/logo_main.png";
    }
}
// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style(css_title) {
    // You may use this script on your site free of charge provided
    // you do not remove this notice or the URL below. Script from
    // https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
    var i, link_tag;
    for (i = 0, link_tag = document.getElementsByTagName("link"); i < link_tag.length; i++) {
        if ((link_tag[i].rel.indexOf("stylesheet") != -1) &&
            link_tag[i].title) {
            link_tag[i].disabled = true;
            if (link_tag[i].title == css_title) {
                link_tag[i].disabled = false;
            }
        }
        set_cookie(style_cookie_name, css_title,
            style_cookie_duration, style_domain);
    }
}

function set_style_from_cookie() {
    var css_title = get_cookie(style_cookie_name);
    if (css_title.length) {
        switch_style(css_title);
    }
}

function set_cookie(cookie_name, cookie_value,
    lifespan_in_days, valid_domain) {
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
        ("; domain=" + valid_domain) : '';
    document.cookie = cookie_name +
        "=" + encodeURIComponent(cookie_value) +
        "; max-age=" + 60 * 60 *
        24 * lifespan_in_days +
        "; path=/" + domain_string;
}

function get_cookie(cookie_name) {
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var cookie_string = document.cookie;
    if (cookie_string.length != 0) {
        var cookie_array = cookie_string.split('; ');
        for (i = 0; i < cookie_array.length; i++) {
            cookie_value = cookie_array[i].match(cookie_name + '=(.*)');
            if (cookie_value != null) {
                return decodeURIComponent(cookie_value[1]);
            }
        }
    }
    return '';
}
const typedTextSpan = document.querySelector(".typed-text");
const text = "Kalyani Government Engineering College";
const typingDelay = 80;
const TextDelay = 2000;
let charIndex = 0;


function type() {
    if (charIndex < text.length) {
        typedTextSpan.textContent = text.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(type, typingDelay + TextDelay);
        charIndex = 0;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 0);
});