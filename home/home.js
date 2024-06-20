const cross = document.querySelector("#dot");
const navbar = document.querySelector(".navOptionsmall");
cross.addEventListener("click",() => {
    navbar.style.display="flex";
});
const xmark = document.querySelector("#xmark");
xmark.addEventListener("click", () => {
    navbar.style.display="none";
})