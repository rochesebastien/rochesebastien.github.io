
const loader = document.querySelector('.loader');
const body = document.querySelector('body');
const project_items = document.querySelectorAll(".project-item");

var loaded = false;


AOS.init({
  delay:300,
  duration:1000,
})


// if(location.protocol == "http:"){
//   location.protocol = "https:"
// }


  // ? Filtre des projets
  function filter(arg){
    
    project_items.forEach(item => {
          item.classList.remove("hide");
          if(!arg==""){
              if(!(item.getAttribute("data-type").includes(arg))){
                  item.classList.add("hide");
              }
          }
         
      });
  }


const three_canvas = document.querySelector('canvas');
// const logo_nav = document.querySelector(".big_logo_nav");
window.addEventListener("scroll",()=>{
  if(window.scrollY>150){
    three_canvas.style.opacity=0.7;
    cancelAnimationFrame( id );//Met en pause l'animation
    three_canvas.style.filter="blur(1.5rem)";
    three_canvas.style.zIndex=-1;
  } else {
    three_canvas.style.opacity=1;
    three_canvas.style.filter="blur(0)";
    three_canvas.style.zIndex=0; 
    requestAnimationFrame(animate);//Met play sur l'animation
  }
})





const skill_line_icon = document.querySelectorAll(".skill_line_icon");
const skill_titles = document.querySelectorAll(".skill_title");
const img_skill_behind = document.querySelectorAll(".img_skill_bg");
for (let j = 0; j < skill_titles.length; j++) {
  img_skill_behind[j].style.opacity=0;
  
  skill_titles[j].addEventListener(("mousemove"),(e)=>{
    img_skill_behind[j].setAttribute('style', 'top:'+(e.pageY - 156)+"px; left:"+(e.pageX - 250)+"px;")
  });

  skill_titles[j].addEventListener(("mouseout"),()=>{
    img_skill_behind[j].style.opacity=0;
  })
  
  skill_titles[j].addEventListener(("click"),()=>{
    skill_line_icon[j].classList.toggle("skill_icon_open");
    // skill_line_icon[j].style.display="flex";
    
  })
}



function DialogOpenClose(){
  if($("#dialog_window").hasClass("dialog_triggered")){
    $("#dialog_window").toggleClass("dialog_triggered");  
    $("#dialog_window").slideToggle(200);
    $("#dialog_window_ctn").css("overflow-y", "hidden");
    $("body").css("overflow-y", "auto");
      } else {
    $("#dialog_window").toggleClass("dialog_triggered");
    $("#dialog_window").slideToggle(450);
    $("#dialog_window_ctn").empty();
    $("#dialog_window_ctn").css("overflow-y", "auto");
    $("body").css("overflow-y", "hidden");
  }
}

for (let i = 0; i < project_items.length; i++) {
  project_items[i].addEventListener("click",()=>{
    $("#dialog_window_ctn").load(window.location.origin+"/pages/projects/project_"+(i+1)+".html")
    DialogOpenClose();
  })
}

function ToggleBtsDialog(){
  $("#dialog_window_ctn").load(window.location.origin+"/pages/bts_presentation.html")
  DialogOpenClose();
}

window.addEventListener('load', () => {
    if(sessionStorage.getItem('FirstLoading') === null){
      loader.classList.add('loader_hide');
      loader.style.overflow = 'hidden'; 
    } else {
        loader.style.display = "none"; 
    }
    sessionStorage.setItem('FirstLoading', 'done');
})


// !! Quand le document est chargé :
$(document).ready(function () {
  var loaded = true;

  if (loaded = true){
    body.setAttribute("style","overflow-y: visible;");
  }

  const home_list_items = document.querySelectorAll(".home_list_item");
let loop = 0;
while (loop < 5) {
  home_list_items.forEach((element,i) => {
    setTimeout(() => {
      element.classList.add("home_list_item_active");
      setTimeout(() => {
        element.classList.remove("home_list_item_active");
      }, 1500);
    }, i * 2000);
   
  });
  loop++; 
}



  


$("#dialog_close").click(function () {
  DialogOpenClose();
});


  //Ouvert  ure menu des parametres
  $("#setting_icon").click(function () {
    if ($("#setting_container").hasClass("setting_toggle")) {
      $("#setting_container").removeClass("setting_toggle");
      setTimeout(() => {
        $(".setting_icon_ctn").addClass("setting_hide");
      }, 150);
    } else {
      if (window.scrollY >= 900) {
        $("#GoTop").removeClass("hide");
      } else {
        $("#GoTop").addClass("hide");
      }
      $(".setting_icon_ctn").removeClass("setting_hide");
      $("#setting_container").addClass("setting_toggle");
    }
  });

  //Bouton pour aller au top
  $("#GoTop").click(function () {
    if ($("#setting_container").hasClass("setting_toggle")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      $("#GoTop").addClass("hide");
      $("#setting_container").removeClass("setting_toggle");
      setTimeout(() => {
        $(".setting_icon_ctn").addClass("setting_hide");
      }, 150);
    }
  });
  $(".footer_top").click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  $(".nav-btn").click(function () {
    //Si la fenetre de navigation est ouverte alors ...
    if ($(".nav-bg").hasClass("triggered_nav")) {


      //Animation Hamburger si bouton déja actif
      $(".nav-icon").css({ transform: "", background: "" });
      $(".nav-icon2").css({ opacity: "", background: "", transform: "" });
      $(".nav-icon3").css({ transform: "", background: "" });

      //Animation apparition navbar
      $(".nav-bg").toggleClass("triggered_nav");
      // $(".navigation").css("height", "0%");
      $(".nav-bg").css({ height: "0%", "border-bottom": "none" });

    } else {
      //Animation Hamburger ligne 1

      $(".nav-icon").css({
        transform: "translateY(0px) rotate(135deg)",
      });
      //Animation Hamburger ligne 2
      $(".nav-icon2").css({
        opacity: "0",
        transform: "translateX(-70%)",
      });
      //Animation Hamburger ligne 3
      $(".nav-icon3").css({
        transform: "translateY(-4px) rotate(-135deg)",
      });

      //Animation apparition navbar
      $(".nav-bg").toggleClass("triggered_nav");
      $(".nav-bg").css({ height: "60%", "border-bottom": "2px solid var(--second_color, white)" });
    }
  });

  //Animation Si lien cliqué alors referme la nav
  $(".nav-link").click(function () {
    $(".nav-bg").css({ height: "0%", "border-bottom": "none" });
    //Animation Hamburger si bouton déja actif
    $(".nav-icon").css({ transform: "", background: "" });
    $(".nav-icon2").css({ opacity: "", background: "", transform: "" });
    $(".nav-icon3").css({ transform: "", background: "" });

    //Animation apparition navbar
    $(".navigation").toggleClass("triggered_nav");
  

  });

  //Code pour le light mode
  $("#switch_mode ").click(function () {
    //Si le light mode est actif alors
    if ($(":root").hasClass("LightEnable")) {
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
      localStorage.setItem("theme", "dark");

      //Ferme le menu parametre
      $("#setting_container").removeClass("setting_toggle");
      $(".setting_icon_ctn").addClass("setting_hide");

    } else {
      //Met le mode jour
      $(":root").css("--main_color", "#fff"); //Change les variables css
      $(":root").css("--second_color", "black"); //Change les variables css
      $(":root").css("--scd_color", "#5959596e"); //Change les variables css

      $(":root").css("--main_bg", 'url("../../img/background/white_bg.jpg")'); //Change le fond

      // $(":root").css("--home_color", "white"); //Change les variables css
      $(".big_logo_nav").css("filter", "invert()"); //Change la couleur en noir du petit logo de la nav
      $("canvas").css("filter", "invert()"); //Change la couleur en blanc(de base) du gros logo
      $(":root").addClass("LightEnable"); //Met la class qui permet de savoir si le mode jour est actif
      $(".icons").css("filter", "none"); //Change les icons
      $("#switch_mode").attr("src", "./img/icon/moon.svg");

      //Met la couleur dans le localStorage (sauvegarde le theme)
      localStorage.setItem("theme", "light");

      //Ferme le menu parametre
      $("#setting_container").removeClass("setting_toggle");
        $(".setting_icon_ctn").addClass("setting_hide");
    }
  });



  
  });