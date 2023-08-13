let menuIcon = document.getElementById("menu"),
    nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    if(menuIcon.classList.contains("active")) {
        menuIcon.classList.remove("active");
        menuIcon.classList.add("inactive");
        nav.classList.remove("on");
    } else {
        menuIcon.classList.add("active");
        menuIcon.classList.remove("inactive");
        nav.classList.add("on");
    }
})