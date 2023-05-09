// Elements
let button = null;
let mainContainer = null;
let loadingScreen = null;
let form = null;
let content = null;
let background = null;

/* 
TODO: Validate upper-case and pattern (tildes) for input
*/

// Names list
const names = {
    'Andrea Alfaro de Vides': 'gryffindor.html',
    'Orlando Vides': 'gryffindor.html',
    'Ana Vides': 'gryffindor.html',
    'Santiago Alfaro': 'gryffindor.html',
    'Mateo Alfaro': 'gryffindor.html',
    'Julia de Alfaro': 'gryffindor.html',
    'Roberto Alfaro': 'gryffindor.html',
    'Paola Marroquin': 'gryffindor.html',
    'Gabriela Marroquin': 'gryffindor.html',
    'Maria Fernanda Jovel': 'gryffindor.html',
    'Maria Renee Jovel': 'gryffindor.html',
    'Juan Carlos Garcia': 'gryffindor.html',
    'Ulises Iraheta': 'gryffindor.html',
    'Roxana': 'gryffindor.html',
    'Axel Iraheta': 'gryffindor.html',
    'Adrian Iraheta': 'gryffindor.html',

    'Gracia Maria Marroquin': 'ravenclaw.html',
    'Alejandra Chavez': 'ravenclaw.html',
    'Carmen Peña': 'ravenclaw.html',
    'Pamela Rivas': 'ravenclaw.html',
    'Scarleth Alvarado': 'ravenclaw.html',
    'Hatzel Lopez': 'ravenclaw.html',
    'Dariana Gonzalez': 'ravenclaw.html',
    'Angela Ayala': 'ravenclaw.html',
    'Paola Ayala': 'ravenclaw.html',
    'Karina Mejia': 'ravenclaw.html',
    'Karen Alas de Abrego': 'ravenclaw.html',
    'Jehovani Miguel': 'ravenclaw.html',
    'Aldo Carpio': 'ravenclaw.html',
    'Roberto Chavez': 'ravenclaw.html',
    'Aleida de Chavez': 'ravenclaw.html',
    'Marcela Chavez': 'ravenclaw.html',

    'Raul Marroquin': 'slytherin.html',
    'Claudia de Marroquin': 'slytherin.html',
    'Nelly Jovel': 'slytherin.html',
    'Antonio Garcia': 'slytherin.html',
    'Dinorah de Garcia': 'slytherin.html',
    'Oscar Suria': 'slytherin.html',
    'Graciela Gavidia': 'slytherin.html',
    'Gladys Melara': 'slytherin.html',
    'Carlos Santos': 'slytherin.html',
    'Stephani': 'slytherin.html',
    'Christian Trabanino': 'slytherin.html',
    'Raquel de Trabanino': 'slytherin.html',
    'Marcelo Madriz': 'slytherin.html',
    'Estela de Madriz': 'slytherin.html',

    'Karen Marroquin': 'hufflepuff.html',
    'Julio Hercules': 'hufflepuff.html',
    'Leonor Melendez': 'hufflepuff.html',
    'Leonor Mancia': 'hufflepuff.html',
    'Angela Mancia': 'hufflepuff.html',
    'Leticia de Funes': 'hufflepuff.html',
    'Concepción de Quintanilla': 'hufflepuff.html',
    'Wendy Funes': 'hufflepuff.html',
    'Antonio Funes': 'hufflepuff.html',
    'Eduardo Serafin': 'hufflepuff.html',
    'Valeria Serafin': 'hufflepuff.html',
};

const bind = () => {
    button = document.querySelector("#send");
    mainContainer = document.querySelector("#main-container");
    loadingScreen = document.querySelector("#loading-screen");
    form = document.querySelector('#form');
    view = document.querySelector('#view');
    background = document.querySelector('#background');
}

const clickListeners = () => {
    form.addEventListener('submit', e => {
        e.preventDefault(); // Prevent normal submitting

        // Loading screen is shown
        mainContainer.classList.add("blurred");
        loadingScreen.style.visibility = 'visible';

        setTimeout(() => {
            // Loading screen off
            loadingScreen.style.visibility = "hidden"
            mainContainer.classList.remove("blurred");


            // Validating names with house
            let name = document.querySelector('#input-name').value;

            if(names[name]) {
                const page = names[name];
                //background.innerHTML = `<div class="background-gryffindor" id="background">`
                mainContainer.innerHTML = 
                `<iframe src="${page}" style="height:100vh;width:100%"></iframe>`
            } else {
                /*
                TODO: Show the error in input 
                 */
                mainContainer.innerHTML = 'Invalid name.';
            }
        }, 2000);
    });
}

let Main = () => {
    bind();
    clickListeners();
}

window.onload = Main;