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
let loader = null;

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
            'alejandra mulato',
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
            'gracia marroquin',
            'elba alejandra chavez',
            'elba chavez',
            'carmen elena pena',
            'carmen pena',
            'allison scarleth alvarado',
            'allison alvarado',
            'pamela sofia rivas',
            'pamela rivas',
            'andrea dariana gonzalez',
            'andrea gonzalez',
            'paola michelle ayala',
            'paola ayala',
            'angela melissa ayala',
            'angela ayala',
            'aleida de chavez',
            'ana marcela chavez',
            'ana chavez',
            'karina mejia',
            'aren alas',
            'aldo carpio',
            'jehovani miguel',
            'hatzel abraham lopez',
            'hatzel lopez']
    },
    {
        house: 'slytherin',
        names: ['raul antonio marroquin',
            'raul marroquin',
            'claudia de marroquin',
            'paola maria marroquin',
            'paola marroquin',
            'elsy gomez',
            'michelle rivas',
            'christian trabanino',
            'raquel de trabanino',
            'marcelo madriz',
            'estela de madriz',
            'carlos santos',
            'stephanie zetino',
            'raul marroquin burgos',
            'raul burgos',
            'nelly aleida jovel',
            'nelly jovel',
            'juan carlos garcia',
            'juan garcia',
            'maria renee garcia',
            'maria fernanda garcia',
            'maria garcia']
    },
    {
        house: 'hufflepuff',
        names: ['leonor mancia',
            'maria de los angeles mancia',
            'maria de los angeles',
            'maria mancia',
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
    loader = document.getElementById('#loader-img');
    bgMusic = document.getElementById('#bgMusic');
}

const clickListeners = () => {
    form.addEventListener('submit', e => {
        e.preventDefault(); // Prevent normal submitting

        // Validating names with house
        let name = document.querySelector('#input-name').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        
        let _house = "";
        let verifyName = false;
        houses.forEach(house => {
            if(house.names.find(x => x == name)){
                switch (house.house) {
                    case "gryffindor":
                        gryffindor.play();    
                        _house = house.house;            
                        break;
                    case "ravenclaw":
                        ravenclaw.play();
                        _house = house.house;
                        break;
                    case "hufflepuff":
                        hufflepuff.play();
                        _house = house.house;
                        break;
                    case "slytherin":
                        slytherin.play();
                        _house = house.house
                        break;
                }
                setTimeout(() => {
                    loadingScreen.style.visibility = "hidden";
                    mainContainer.classList.remove("blurred");
                    mainContainer.classList.remove(`${_house}`)
                    document.getElementById("loader-img").src="";
                    document.getElementById('loader-img').style = "";
                }, 2500);
                verifyName = true;
                return;
            } return;
        });

        if (!verifyName) {
            alert("¡Ingrese un nombre válido!")
        } else {
            let image = document.getElementById('loader-img')
            image.src=`./../assets/images/${_house}.png`;
            image.style.transform = "scale(2.8)";
            image.style.transition = "transform 1s ease";

            mainContainer.classList.add(`${_house}`)
            mainContainer.classList.add("blurred");
            loadingScreen.style.visibility = 'visible';
        }
    });
}

let Main = () => {
    bgMusic.volume = 0.2;
    bind();
    clickListeners();
}

window.onload = Main;