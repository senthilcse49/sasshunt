import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "outline": 0
    },
    "body": {
        "height": "100%",
        "fontSize": 12,
        "lineHeight": 22,
        "fontFamily": "verdana, arial, sans-serif",
        "color": "#727272",
        "background": "url(images/body-pattern.png) repeat 0 0",
        "minWidth": "100%"
    },
    "html": {
        "height": "100%"
    },
    "a": {
        "color": "#00acef",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "a:hover": {
        "textDecoration": "underline"
    },
    "a img": {
        "border": 0
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "footer": {
        "display": "block",
        "background": "url(images/footer-border.png) repeat-x 0 0",
        "paddingTop": 18,
        "paddingRight": 20,
        "paddingBottom": 18,
        "paddingLeft": 10
    },
    "header": {
        "display": "block",
        "marginBottom": 15,
        "position": "relative",
        "paddingTop": 25,
        "height": 43,
        "background": "url(images/border-title.png) repeat-x 0 bottom"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "input": {
        "fontSize": 12,
        "fontFamily": "arial, sans-serif"
    },
    "textarea": {
        "fontSize": 12,
        "fontFamily": "arial, sans-serif",
        "overflow": "auto"
    },
    "select": {
        "fontSize": 12,
        "fontFamily": "arial, sans-serif"
    },
    "cl": {
        "display": "block",
        "height": 0,
        "fontSize": 0,
        "lineHeight": 0,
        "textIndent": -4000,
        "clear": "both"
    },
    "notext": {
        "fontSize": 0,
        "lineHeight": 0,
        "textIndent": -4000
    },
    "left": {
        "float": "left",
        "display": "inline"
    },
    "alignleft": {
        "float": "left",
        "display": "inline"
    },
    "right": {
        "float": "right",
        "display": "inline"
    },
    "alignright": {
        "float": "right",
        "display": "inline"
    },
    "shell": {
        "width": 981,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "container": {
        "background": "url(images/container.png) repeat-y center 0",
        "boxShadow": "0px 0px 0px 4px rgba(0,0,0,0.05)",
        "MozBoxShadow": "0px 0px 0px 4px rgba(0,0,0,0.05)",
        "WebkitBoxShadow": "0px 0px 0px 4px rgba(0,0,0,0.05)",
        "OBoxShadow": "0px 0px 0px 4px rgba(0,0,0,0.05)"
    },
    "logo": {
        "width": 129,
        "fontSize": 0,
        "lineHeight": 0,
        "position": "absolute",
        "top": 23,
        "left": 21
    },
    "logo a": {
        "height": 26,
        "display": "block",
        "background": "url(images/logo.png) no-repeat 0 0",
        "textIndent": -4000
    },
    "search": {
        "width": 210,
        "marginLeft": "auto",
        "paddingRight": 21
    },
    "search inputfield": {
        "float": "left",
        "width": 166,
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "height": 24,
        "lineHeight": 24,
        "border": "1px solid #d3d3d3",
        "fontSize": 11,
        "color": "#bebebe",
        "background": "#ededed",
        "borderRadius": 5,
        "MozBorderRadius": 5,
        "WebkitBorderRadius": 5,
        "OBorderRadius": 5
    },
    "search inputsearch-btn": {
        "float": "left",
        "fontSize": 0,
        "lineHeight": 0,
        "textIndent": -4000,
        "cursor": "pointer",
        "width": 20,
        "height": 26,
        "border": 0,
        "background": "url(images/search-ico.png) no-repeat 0 0"
    },
    "navigation": {
        "paddingTop": 0,
        "paddingRight": 21,
        "paddingBottom": 0,
        "paddingLeft": 21,
        "marginBottom": 15
    },
    "navigation ul": {
        "listStyle": "none",
        "listStylePosition": "outside"
    },
    "navigation ul li": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "float": "left",
        "fontFamily": "'Raleway', sans-serif",
        "fontSize": 15,
        "fontWeight": "500"
    },
    "navigation ul li:first-child": {
        "paddingLeft": 0
    },
    "navigation ul li a": {
        "color": "#4a4a4a",
        "paddingTop": 0,
        "paddingRight": 7,
        "paddingBottom": 0,
        "paddingLeft": 7,
        "display": "block",
        "height": 21,
        "lineHeight": 21,
        "border": "2px solid transparent",
        "borderRadius": 3,
        "MozBorderRadius": 3,
        "WebkitBorderRadius": 3,
        "OBorderRadius": 3
    },
    "navigation ul liactive a": {
        "border": "2px solid #029cdb",
        "background": "url(images/nav-btn.png) repeat-x 0 0",
        "color": "#fff",
        "textDecoration": "none"
    },
    "navigation ul li a:hover": {
        "border": "2px solid #029cdb",
        "background": "url(images/nav-btn.png) repeat-x 0 0",
        "color": "#fff",
        "textDecoration": "none"
    },
    "navigation anav-btn": {
        "display": "none"
    },
    "slider-holder": {
        "position": "relative",
        "marginBottom": 30
    },
    "slider": {
        "background": "url(images/slider-bg.jpg) no-repeat 0 0",
        "width": 938,
        "height": 417,
        "position": "relative",
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 21,
        "paddingBottom": 0,
        "paddingLeft": 21
    },
    "slider ul": {
        "listStyle": "none",
        "listStylePosition": "outside"
    },
    "slider ul li": {
        "float": "left",
        "width": 938,
        "height": 417
    },
    "slider slide-cnt": {
        "width": 450,
        "height": 220,
        "position": "relative",
        "overflow": "hidden",
        "float": "right",
        "paddingTop": 30
    },
    "slider h4": {
        "color": "#fff",
        "fontSize": 16,
        "fontFamily": "'Raleway', sans-serif",
        "fontWeight": "500",
        "textShadow": "rgba(0,0,0,0.5) 0px 1px 0px",
        "textTransform": "uppercase"
    },
    "slider h2": {
        "color": "#f8f8f8",
        "fontFamily": "'Raleway', sans-serif",
        "fontSize": 56,
        "lineHeight": 56,
        "paddingBottom": 12,
        "fontWeight": "700",
        "textShadow": "rgba(0,0,0,0.5) 0px 1px 0px"
    },
    "slider p": {
        "color": "#fff"
    },
    "slider p a": {
        "color": "#fff",
        "textDecoration": "underline"
    },
    "slider p a:hover": {
        "textDecoration": "none"
    },
    "slider img": {
        "float": "left",
        "marginRight": 50,
        "marginLeft": 24
    },
    "slider socials": {
        "width": 158,
        "marginLeft": "auto",
        "paddingTop": 18
    },
    "slider socials a": {
        "width": 31,
        "height": 30,
        "float": "left",
        "marginLeft": 6,
        "background": "url(images/socials.png) no-repeat 0 0",
        "fontSize": 0,
        "lineHeight": 0,
        "textIndent": -4000
    },
    "slider socials afacebook-ico": {
        "backgroundPosition": "0 0"
    },
    "slider socials afacebook-ico:hover": {
        "backgroundPosition": "0 bottom"
    },
    "slider socials atwitter-ico": {
        "backgroundPosition": "-37px 0"
    },
    "slider socials atwitter-ico:hover": {
        "backgroundPosition": "-37px bottom"
    },
    "slider socials askype-ico": {
        "backgroundPosition": "-75px 0"
    },
    "slider socials askype-ico:hover": {
        "backgroundPosition": "-75px bottom"
    },
    "slider socials arss-ico": {
        "backgroundPosition": "-114px 0"
    },
    "slider socials arss-ico:hover": {
        "backgroundPosition": "-114px bottom"
    },
    "thumbs-wrapper": {
        "width": 434,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "position": "absolute",
        "bottom": 18,
        "right": 21,
        "overflow": "hidden"
    },
    "thumbs-wrapper aprev": {
        "width": 12,
        "height": 17,
        "position": "absolute",
        "top": "50%",
        "marginTop": -8,
        "left": 0,
        "background": "url(images/left-arr.png) no-repeat 0 0"
    },
    "thumbs-wrapper anext": {
        "width": 12,
        "height": 17,
        "position": "absolute",
        "top": "50%",
        "marginTop": -8,
        "right": 0,
        "background": "url(images/right-arr.png) no-repeat 0 0"
    },
    "thumbs": {
        "height": 80,
        "width": 434,
        "position": "relative",
        "overflow": "hidden",
        "paddingTop": 7
    },
    "thumbs a": {
        "marginBottom": 8,
        "width": 94,
        "height": 69,
        "marginRight": 8,
        "float": "left",
        "background": "#fff",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "borderRadius": 4,
        "MozBorderRadius": 4,
        "WebkitBorderRadius": 4,
        "OBorderRadius": 4,
        "border": "1px solid #d5d5d5"
    },
    "thumbs a img": {
        "width": 94,
        "height": 69,
        "float": "left"
    },
    "thumbs aselected": {
        "height": 76,
        "position": "relative",
        "marginTop": -7,
        "opacity": 1
    },
    "thumbs aselected img": {
        "height": 76
    },
    "main": {
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "featured": {
        "background": "#f1f1f1",
        "border": "1px solid #e5e5e5",
        "paddingTop": 10,
        "paddingRight": 213,
        "paddingBottom": 10,
        "paddingLeft": 18,
        "marginBottom": 42,
        "position": "relative",
        "borderRadius": 5,
        "MozBorderRadius": 5,
        "WebkitBorderRadius": 5,
        "OBorderRadius": 5
    },
    "featured h4": {
        "fontFamily": "'Raleway', sans-serif",
        "lineHeight": 43,
        "fontSize": 17,
        "color": "#4a4a4a",
        "fontWeight": "400"
    },
    "featured h4 strong": {
        "color": "#00acef",
        "fontWeight": "600"
    },
    "featured ablue-btn": {
        "background": "url(images/blue-btn.png) repeat 0 0",
        "width": 189,
        "height": 39,
        "textShadow": "rgba(0,0,0,0.5) 0px 1px 1px",
        "position": "absolute",
        "top": "50%",
        "marginTop": -20,
        "right": 9,
        "display": "block",
        "fontSize": 16,
        "fontWeight": "500",
        "color": "#fff",
        "textAlign": "center",
        "lineHeight": 39,
        "border": "2px solid #0a7fb5",
        "borderRadius": 6,
        "MozBorderRadius": 6,
        "WebkitBorderRadius": 6,
        "OBorderRadius": 6,
        "textDecoration": "none",
        "fontFamily": "'Raleway', sans-serif"
    },
    "featured ablue-btn:hover": {
        "backgroundPosition": "0 bottom"
    },
    "main h3": {
        "fontSize": 16,
        "fontFamily": "'Raleway', sans-serif",
        "color": "#4a4a4a",
        "fontWeight": "500",
        "paddingBottom": 12,
        "marginBottom": 8,
        "background": "url(images/border-title.png) repeat-x 0 bottom"
    },
    "main h5": {
        "fontSize": 12,
        "paddingBottom": 10
    },
    "main amore": {
        "background": "url(images/blue-arr.png) no-repeat 0 6px",
        "textDecoration": "underline",
        "paddingLeft": 8,
        "fontWeight": "500",
        "fontFamily": "'Raleway', sans-serif"
    },
    "main a:hover": {
        "textDecoration": "none"
    },
    "main cols": {
        "paddingBottom": 38
    },
    "main cols col": {
        "float": "left",
        "width": 286,
        "paddingRight": 40
    },
    "main cols collast": {
        "paddingRight": 0
    },
    "main cols col imgleft": {
        "marginRight": 24,
        "marginBottom": 10
    },
    "main cols col a": {
        "textDecoration": "underline"
    },
    "main cols col ul": {
        "listStyle": "none",
        "listStylePosition": "outside"
    },
    "main cols col ul li": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 12,
        "paddingLeft": 10,
        "background": "url(images/border-title.png) repeat-x 0 bottom",
        "fontFamily": "'Raleway', sans-serif",
        "fontWeight": "600"
    },
    "main cols col ul liodd": {
        "backgroundColor": "#f6f6f6"
    },
    "main cols col ul li a": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "display": "block",
        "background": "url(images/bullet.png) no-repeat 0px 9px"
    },
    "main cols col ul lifirst": {
        "paddingTop": 2
    },
    "main entries": {
        "background": "url(images/entries.png) repeat-y 0 0",
        "position": "relative",
        "marginTop": 0,
        "marginRight": -20,
        "marginBottom": 1,
        "marginLeft": -20,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderBottom": "1px solid #e8e8e8"
    },
    "main entries h3": {
        "marginBottom": 15,
        "background": "url(images/entry-title.png) repeat-x 0 bottom"
    },
    "main entries entry": {
        "width": 286,
        "float": "left",
        "paddingRight": 40
    },
    "main entries entrylast": {
        "paddingRight": 0
    },
    "main entries entry pmeta": {
        "color": "#cbcbcb"
    },
    "main entries entry pmeta a": {
        "color": "#cbcbcb"
    },
    "main entries entry-inner": {
        "paddingBottom": 18,
        "marginBottom": 16,
        "background": "url(images/entry-title.png) repeat-x 0 bottom"
    },
    "main entries entry date": {
        "marginRight": 15,
        "position": "relative",
        "float": "left",
        "paddingTop": 14,
        "paddingRight": 12,
        "paddingBottom": 14,
        "paddingLeft": 12,
        "width": 40,
        "height": 34,
        "background": "url(images/date-ico.png) no-repeat 0 0"
    },
    "main entries entry date strong": {
        "color": "#00acef",
        "fontSize": 22,
        "lineHeight": 22,
        "fontFamily": "arial, sans-serif",
        "fontWeight": "bold",
        "display": "block"
    },
    "main entries entry date span": {
        "fontWeight": "bold",
        "fontSize": 9,
        "color": "#c6c6c6",
        "position": "relative",
        "marginTop": 0,
        "display": "block",
        "lineHeight": 9
    },
    "main entries entry date em": {
        "WebkitTransform": "rotate(-90deg)",
        "lineHeight": 12,
        "MozTransform": "rotate(-90deg)",
        "fontWeight": "bold",
        "fontStyle": "normal",
        "width": 12,
        "color": "#bdbdbd",
        "fontSize": 12,
        "position": "absolute",
        "bottom": 20,
        "left": 41
    },
    "testimonials": {
        "paddingBottom": 30
    },
    "testimonials p": {
        "fontStyle": "italic",
        "fontFamily": "georgia ,arial, serif",
        "fontSize": 14,
        "color": "#898989"
    },
    "testimonials p strong": {
        "fontSize": 43,
        "position": "relative",
        "bottom": -19,
        "fontWeight": "normal",
        "paddingRight": 4
    },
    "testimonials pauthor": {
        "fontSize": 12,
        "textAlign": "right"
    },
    "testimonials pauthor strong": {
        "fontSize": 12,
        "bottom": 0,
        "fontWeight": "bold"
    },
    "footer-nav": {
        "float": "left"
    },
    "footer-nav ul": {
        "listStyle": "none",
        "listStylePosition": "outside"
    },
    "footer-nav ul li": {
        "float": "left",
        "borderRight": "1px solid #afaca9",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 10,
        "lineHeight": 10
    },
    "footer-nav ul li a": {
        "color": "#afaca9"
    },
    "footer-nav ul li a:hover": {
        "color": "#878684",
        "textDecoration": "none"
    },
    "footer-nav ul lilast": {
        "borderRight": 0
    },
    "footer pcopy": {
        "fontSize": 10,
        "color": "#afaca9",
        "lineHeight": 10,
        "float": "right"
    },
    "footer pcopy a": {
        "fontSize": 10,
        "color": "#00acef",
        "lineHeight": 10,
        "textDecoration": "underline"
    },
    "footer pcopy a:hover": {
        "textDecoration": "none"
    },
    "footer pcopy span": {
        "paddingTop": 0,
        "paddingRight": 7,
        "paddingBottom": 0,
        "paddingLeft": 7
    },
    "ul img": {
        "borderRadius": 10
    }
});