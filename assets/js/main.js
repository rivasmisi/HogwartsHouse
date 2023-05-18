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

const houses = [
    {
        house: 'gryffindor',
        names: ['antonio garcia',
            'dinora de garcia',
            'oscar suria',
            'graciela gavidia',
            'steven garcia',
            'gladys melara',
            'alejandra beatriz mulato',
            'leonor melendez',
            'karen marroquin',
            'wendy funes',
            'valeria serafin',
            'eduardo serafin',
            'leticia de funes',
            'concepcion de quintanilla',
            'antonio funes',
            'gabriela marroquin']
    },
    {
        house: 'ravenclaw',
        names: ['gracia maria marroquin',
            'elba alejandra chavez',
            'carmen elena peña',
            'allison scarleth alvarado',
            'pamela sofia rivas',
            'andrea dariana gonzalez',
            'paola michelle ayala',
            'angela melissa ayala',
            'aleida de chavez',
            'ana marcela chavez',
            'karina mejia',
            'aren alas',
            'aldo carpio',
            'jehovani miguel',
            'hatzel abraham lopez',
            ]
    },
    {
        house: 'slytherin',
        names: ['raul antonio marroquin',
            'claudia de marroquin',
            'paola maria marroquin',
            'elsy gomez',
            'michelle rivas',
            'christian trabanino',
            'raquel de trabanino',
            'marcelo madriz',
            'estela de madriz',
            'carlos santos',
            'stephanie zetino',
            'raul marroquin burgos',
            'nelly aleida jovel',
            'juan carlos garcia',
            'maria renee garcia',
            'maria fernanda garcia']
    },
    {
        house: 'hufflepuff',
        names: ['leonor mancia',
            'maria de los angeles mancia',
            'milagro manzano',
            'ulises iraheta',
            'axel iraheta',
            'mery valenzuela',
            'julia de alfaro',
            'roberto alfaro',
            'santiago alfaro',
            'mateo alfaro',
            'orlando vides',
            'andrea de vides']
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

        // Validating names with house
        let name = document.querySelector('#input-name').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        // Removing accents

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

        //console.log(verifyName);

        if (!verifyName) {
            alert("Ingrese un nombre válido!")
        } else {
            mainContainer.classList.add("blurred");
            loadingScreen.style.visibility = 'visible';
        }
    });
}

let Main = () => {
    bind();
    clickListeners();
}

window.onload = Main;