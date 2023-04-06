window.addEventListener("load", function() {
    window.location.href = "construction.html"
})

const containers = document.querySelectorAll(".slanted-container");
for (let i = 0; i < containers.length; i++) {
    containers[i].style.transform = "translateY(calc(-0.25 * " + i.toString() + "* var(--skewness))";
}