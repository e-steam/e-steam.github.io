const containers = document.querySelectorAll(".slanted-container");
for (let i = 0; i < containers.length; i++) {
    containers[i].style.transform = "translateY(calc(-0.25 * " + i.toString() + "* var(--skewness))";
}

let resources = document.getElementById("resource-carousel");
resources.addEventListener("slide.bs.carousel", function (e) {
    document.querySelector(".resource-toggle.active").classList.remove("active");
    document.querySelectorAll(".resource-toggle")[e.to].classList.add("active");
});

document.querySelectorAll(".resource-downloader").forEach(el => {
    el.addEventListener("click", function() {
        this.querySelector("a").click();
    })
})