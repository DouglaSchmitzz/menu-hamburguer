function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu")
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open")
        document.querySelector(".icon").scr = "/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
    } else {
        menuMobile.classList.add("open")
    }
}               