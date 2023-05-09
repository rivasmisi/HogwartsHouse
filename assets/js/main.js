// Elements
let button = null;
let mainContainer = null;
let loadingScreen = null;
let inputName = null;
let ghostBackdrop = null;

const bind = () => {
    button = document.querySelector("#send");
    mainContainer = document.querySelector("#main-container");
    loadingScreen = document.querySelector("#loading-screen");
    inputName = document.querySelector("#input-name");
    ghostBackdrop = document.querySelector("#ghost-backdrop");
}

const clickListeners = () => {

    // Button Listener

    button.addEventListener("click", () => {
        mainContainer.classList.add("blurred");
        loadingScreen.style.visibility = 'visible';

        setTimeout(() => {
            loadingScreen.style.visibility = "hidden"
            mainContainer.classList.remove("blurred");
        }, 2500);
    });

    // Input Listener

    inputName.addEventListener("click", () => {
        inputName.classList.add("input-clicked");
        ghostBackdrop.style.visibility = 'visible';
    });

    // Ghost Backdrop Listener

    /* ghostBackdrop.addEventListener("click", () => {
        inputName.classList.remove("input-clicked");
        console.log("ola");
    }); */
}

let Main = () => {
    bind();
    clickListeners();
}

window.onload = Main;