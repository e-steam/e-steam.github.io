// window.addEventListener("load", function() {
//     window.location.href = "construction.html"
// })

const containers = document.querySelectorAll(".slanted-container");
for (let i = 0; i < containers.length; i++) {
    containers[i].style.transform = "translateY(calc(-0.25 * " + i.toString() + "* var(--skewness))";
}

const names = ["Albert Einstein", "Annie Jump-Cannon", "Jocelyn Bell-Burnell", "Edwin Hubble"]
let i = 0;
document.querySelectorAll(".volunteer-name").forEach(el => {
    el.innerText = names[i];
    i += 1;
})