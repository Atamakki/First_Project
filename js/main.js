const navMenuButton = document.querySelector("#nav-menu-open");
console.log(navMenuButton);

navMenuButton.addEventListener("click", function(){
    const menu = document.querySelector(".mobile-menu");
    menu.style.display = "";
});


window.addEventListener("click", function(event) {
    if(event.target.closest("#nav-menu-open")) {
        return;
    };
    const menu = document.querySelector(".mobile-menu");
    menu.style.display = "none";
})