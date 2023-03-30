// Elements
let button = null;
let mainContainer = null;
let loadingScreen = null;

const bind = () => {
    button = document.querySelector("#send");
    mainContainer = document.querySelector("#main-container");
    loadingScreen = document.querySelector("#loading-screen");
}

const clickListeners = () => {
    button.addEventListener("click", () => {
        mainContainer.classList.add("blurred");
        loadingScreen.style.visibility = 'visible';

        setTimeout(() => {
            loadingScreen.style.visibility = "hidden"
            mainContainer.classList.remove("blurred");
        }, 2000);
    });
}

let Main = () => {
    bind();
    clickListeners();
}

window.onload = Main;