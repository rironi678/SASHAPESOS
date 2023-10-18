$(document).ready(function(){ 
    $(".nav-scroll").on("click","a", function (event) { 
        event.preventDefault(); 
        var id  = $(this).attr('href'), 
            top = $(id).offset().top; 
$('body,html').animate({ scrollTop: top }, 500);
    window.location.hash = id;
    if (document.documentElement.clientWidth >= 1366) return;
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const body = document.querySelector("#page");
    const expanded =
    menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    body.classList.remove("no-scroll");
    }); 
}); 

