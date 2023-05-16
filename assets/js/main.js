// Audio Files
const gryffindor = new Audio('./../assets/audio/gryffindor.mp3');
const hufflepuff = new Audio('./../assets/audio/hufflepuff.mp3');
const ravenclaw = new Audio('./../assets/audio/ravenclaw.mp3');
const slytherin = new Audio('./../assets/audio/slytherin.mp3');

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
/*const names = {
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
};*/

const houses = [
    {
        house: 'gryffindor',
        names: ['andrea alfaro de vides',
                'orlando vides',
                'ana vides',
                'santiago alfaro',
                'mateo alfaro',
                'mateo alfaro',
                'julia de alfaro',
                'roberto alfaro',
                'paola marroquin',
                'gabriela marroquin',
                'maria fernanda jovel',
                'maria renee jovel',
                'juan carlos garcia',
                'ulises iraheta',
                'roxana',
                'axel iraheta',
                'adrian iraheta']
    },
    {
        house: 'ravenclaw',
        names: ['gracia maria marroquin',
                'alejandra chavez',
                'carmen peña',
                'pamela rivas',
                'scarleth alvarado',
                'hatzel lopez',
                'dariana gonzalez',
                'angela ayala',
                'paola ayala',
                'karina mejia',
                'karen alas de abrego',
                'jehovani miguel',
                'aldo carpio',
                'roberto chavez',
                'aleida de chavez',
                'marcela chavez']
    },
    {
        house: 'slytherin',
        names: ['raul marroquin',
                'claudia de marroquin',
                'nelly jovel',
                'antonio garcia',
                'dinorah de garcia',
                'oscar suria',
                'graciela gavidia',
                'gladys melara',
                'carlos santos',
                'stephani',
                'christian trabanino',
                'raquel de trabanino',
                'marcelo madriz',
                'estela de madriz']
    },
    {
        house: 'hufflepuff',
        names: ['karen marroquin',
                'julio hercules',
                'leonor melendez',
                'leonor mancia',
                'angela mancia',
                'leticia de funes',
                'concepción de quintanilla',
                'wendy funes',
                'antonio funes',
                'eduardo serafin',
                'valeria serafin']
    }
]

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
          
        // Validating names with house
        let name = document.querySelector('#input-name').value.toLowerCase();

        let verifyName = false;
        houses.forEach(house => {
            if(house.names.find(x => x == name)){
                switch (house.house) {
                    case "gryffindor":
                        gryffindor.play();                 
                        break;
                    case "ravenclaw":
                        ravenclaw.play();
                        break;
                    case "hufflepuff":
                        hufflepuff.play();
                        break;
                    case "slytherin":
                        slytherin.play();
                        break;
                }
                setTimeout(() => {
                    loadingScreen.style.visibility = "hidden"
                    mainContainer.classList.remove("blurred");
                }, 2500);
                verifyName = true;
                return;
            } return;
        });

        console.log(verifyName);

        if (!verifyName) {
            alert("Papu no, te equivocaste de barrio la 18 no te lo perdonara")
        } else {
            mainContainer.classList.add("blurred");
            loadingScreen.style.visibility = 'visible';
        }
        
            /* if(names[name]) {
                const page = names[name];
                
                //background.innerHTML = `<div class="background-gryffindor" id="background">`
                mainContainer.innerHTML = 
                `<iframe src="${page}" style="height:100vh;width:100%"></iframe>`
            } else {
                
                //TODO: Show the error in input 
                
                mainContainer.innerHTML = 'Invalid name.';
            } */  
    });
}

let Main = () => {
    bind();
    clickListeners();
}

window.onload = Main;