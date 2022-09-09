export const inputStyle = {
    inputContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginBottom: 30,
        backgroundColor: "transparent",
        zIndex: 2,
    },
    form_control: {
        "display": "block",
        "width": "100%",
        "padding": ".375rem .75rem",
        "fontSize": "1rem",
        "fontWeight": "400",
        "lineHeight": "1.5",
        "color": "#212529",
        "backgroundClip": "padding-box",
        "border": "1px solid #ced4da",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none",
        "borderRadius": ".25rem",
        "zIndex": "60",
      },
    padding: "0 10px",
    height: 30,
    formControl: {
        display:"block",
        width:"100%",
        padding:".375rem .75rem",
        fontSize: "1rem",
        fontWeight:400,
        lineHeight:1.5,
        color:"#212529",
        backgroundColor: "transparent",
        border: "1px solid #ced4da",
        borderRadius:".25rem",
        height: "40px",
        zIndex: 60
    },
    labelFloating: {
        top:"18px",
        fontSize:"14px",
        lineHeight:1.42857,
        left:"20px"
    },
    labelFloatingNotEmpty: {
        "position": "absolute",
        "top": "5px",
        "left": "20px",
        "fontSize": "10px",
        "transition": "150ms"
      },
      controlLabel: {
        "position": "absolute",
        "top": "18px",
        "fontSize": "14px",
        "lineHeight": "1.42857",
        "left": "20px",
        "zIndex": "5",
        "transition": "150ms"
      }
}

export const cardCarouselStyle = {
    "card_with_description__card_thumb": {
      "height": "200px"
    },
    "card_with_description__card": {
      "margin": "10px",
      "marginBottom": "70px",
      "overflow": "hidden",
      "width": "300px",
      "height": "inherit"
    },
    "card_with_description": {
      "width": "300px"
    },
    "text_white_70": {
      "color": "rgba(255, 255, 255, 0.7)"
    } 
  }

  export const loaderStyle = {
    "divLoaderView": {
        "position": "absolute",
        "right": "50%",
        "marginRight": "-10px",
        "width": "20px",
        "height": "20px",
        "top": "35%"
    },
    "svgLoaderView": {
    "animation": "spin 3s linear infinite",
    "margin": "auto",
    "height": "20px"
    }
  }

  export const headerStyle = {
    "homepage_header": {
      "position": "relative",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "height": "550px"
    },
    "overlay": {
      "background": "#000",
      "position": "absolute",
      "left": "0",
      "right": "0",
      "bottom": "0",
      "top": "0",
      "opacity": "0.6",
      "WebkitBackdropFilter": "saturate(180%) blur(5px)",
      "backdropFilter": "saturate(180%) blur(5px)"
    },
    "homepage_description_block": {
      "position": "absolute",
      "bottom": "0",
      "left": "50px"
    },
    "homepage_header__movies_nav": {
      "background": "transparent !important"
    },
    "homepage_header__movies_nav__nav_link": {
      "color": "#fff !important",
      "paddingBottom": "14px !important"
    },
    "homepage_search_form__form_control": {
      "fontSize": "15px",
      "height": "50px",
      "paddingRight": "106px",
      "border": "none"
    },
    "homepage_search_form__form_group": {
      "position": "relative"
    },
    "homepage_search_form__locate_me": {
      "background": "#ececec none repeat scroll 0 0",
      "color": "#666",
      "fontSize": "12px",
      "padding": "7px 10px",
      "borderRadius": "6px",
      "position": "absolute",
      "right": "14px",
      "top": "9px",
      "&:hover": {
        "background": "#666 none repeat scroll 0 0",
        "color": "#ffffff"
      }
    },
    "homepage_search_form__btn": {
      "fontSize": "15px",
      "fontWeight": "600",
      "height": "50px",
      "padding": "13px 5px"
    },
    "homepage_search_form__location_dropdown_i": {
      "left": "18px",
      "position": "absolute",
      "top": "20px",
      "zIndex": "9"
    },
    "description_block": {
      "width": "700px"
    },
    "font_weigth_400": {
      "fontWeight": "400"
    },
    "font_weigth_200": {
      "fontWeight": "200"
    },
    "description_info": {
      "fontSize": "18px"
    },
    "mr_3": {
      "marginRight": "1rem !important"
    },
    "back_button": {
      "left": "40px",
      "cursor": "pointer"
    }
  }

  export const carouselStyle = {
    "carousel": {
      "height": "400px",
      "backgroundColor": "#10101a",
      "position": "relative"
    },
    "p_7": {
      "padding": "6rem"
    },
    "season_number_selected": {
      "width": "30px",
      "height": "30px",
      "margin": "10px",
      "backgroundColor": "#fff",
      "fontWeight": "bold",
      "color": "#10101a",
      "fontSize": "18px",
      "borderRadius": "100%"
    },
    "season_number": {
      "width": "30px",
      "height": "30px",
      "margin": "10px",
      "fontWeight": "bold",
      "color": "#fff",
      "fontSize": "18px"
    },
    "carousel_cards": {
      "MsOverflowStyle": "none",
      "scrollbarWidth": "none"
    }
  }

  export const homepageStyle = {
    container: { 
        display: "flex", 
        flex: 1, 
        height: "100vh", 
        justifyContent: "center"
    },
    center: { 
        alignSelf: "center", 
        justifyContent: "center", 
        textAlign: "center"
    },
    button: { 
        backgroundColor: "#60EED2", 
        border: "none", 
        padding: "10px 30px", 
        borderRadius: 20, 
        cursor: "pointer" 
    },
    title: { 
        marginBottom: 70, 
        fontSize: 30 
    }
  }