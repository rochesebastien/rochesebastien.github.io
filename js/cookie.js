
let themeStorage = localStorage.getItem('theme');
$(document).ready(function() {

if(themeStorage=="dark"){
//Met le mode nuit
$(":root").css("--main_color", "black"); //Change les variables css
$(":root").css("--second_color", "#fff"); //Change les variables css
$(":root").css("--scd_color", "#f1f1f17a"); //Change les variables css

$(":root").css("--main_bg", 'url("../../img/background/black_bg.jpg")'); //Change le fond

$(".big_logo_nav").css("filter", "none"); //Change la couleur en blanc(de base) du petit logo de la nav
$("canvas").css("filter", "none"); //Change la couleur en noir du gros logo
$(":root").removeClass("LightEnable"); //Enleve la class qui permet de savoir si le mode jour est actif
$(".icons").css("filter", "invert()"); //Change les icons
$("#switch_mode").attr("src", "./img/icon/sun.svg");
//Met la couleur dans le localStorage (sauvegarde le theme)

} else if(themeStorage=="light"){

    //Met le mode jour
    $(":root").css("--main_color", "#fff"); //Change les variables css
    $(":root").css("--second_color", "black"); //Change les variables css
    $(":root").css("--scd_color", "#5959596e"); //Change les variables css

    $(":root").css("--main_bg", 'url("../../img/background/white_bg.jpg")'); //Change le fond

    // $(":root").css("--home_color", "white"); //Change les variables css
    $(".big_logo_nav").css("filter", "invert(1)"); //Change la couleur en noir du petit logo de la nav
    $("canvas").css("filter", "invert()"); //Change la couleur en blanc(de base) du gros logo
    $(":root").addClass("LightEnable"); //Met la class qui permet de savoir si le mode jour est actif
    $(".icons").css("filter", "none"); //Change les icons
    $("#switch_mode").attr("src", "./img/icon/moon.svg");

    //Ferme le menu parametre
    $("#setting_container").removeClass("setting_toggle");
    $(".setting_icon_ctn").addClass("setting_hide");
}

})