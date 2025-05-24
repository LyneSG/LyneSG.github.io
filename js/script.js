const timeSlider = document.getElementById('timeSlider');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

const containerWidth = 300;
const containerHeight = 200;
const radius = (window.innerWidth - 40) / 2;


function afficher(){
    document.querySelector('.enPlusContainer').classList.remove("hide");
    document.querySelector("#moins").classList.remove("hide");
    document.querySelector("#plus").classList.add("hide");
}

function reduire(){
    document.querySelector('.enPlusContainer').classList.add("hide");
    document.querySelector("#moins").classList.add("hide");
    document.querySelector("#plus").classList.remove("hide");
}

function clair() {
    // Sélectionne tous les éléments avec la classe "clair"
    const clairElements = document.querySelectorAll(".clair");
    clairElements.forEach(element => {
        element.classList.remove("hide");  // Retire la classe "hide" des éléments avec "clair"
    });
    document.body.style.background = "linear-gradient(90deg,rgb(255, 0, 0) 0%, rgb(255, 242, 0) 100%)"; 

    // Sélectionne tous les éléments avec la classe "sombre"
    const sombreElements = document.querySelectorAll(".sombre");
    sombreElements.forEach(element => {
        element.classList.add("hide");  // Ajoute la classe "hide" aux éléments avec "sombre"
    });
}

function sombre() {
    // Sélectionne tous les éléments avec la classe "clair"
    const clairElements = document.querySelectorAll(".clair");
    clairElements.forEach(element => {
        element.classList.add("hide");  // Ajoute la classe "hide" aux éléments avec "clair"
    });
    document.body.style.background = "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(40, 41, 97, 1) 100%)"; 
    // Sélectionne tous les éléments avec la classe "sombre"
    const sombreElements = document.querySelectorAll(".sombre");
    sombreElements.forEach(element => {
        element.classList.remove("hide");  // Retire la classe "hide" des éléments avec "sombre"
    });
}



timeSlider.addEventListener('input', function() {
    const time = parseFloat(this.value);
    let backgroundColor;

    const X = window.innerWidth * time / 24;
    const Y = window.innerHeight - radius * Math.sin(time / 48 * 2 * Math.PI);

    if ( time > 5 && time < 20) {
        sun.style.backgroundColor = 'yellow';
        clair();
    } else {
        sun.style.backgroundColor = 'white';
        sombre();
    }

    document.body.style.backgroundColor = backgroundColor;

    sun.style.left = `${X}px`;
    sun.style.top = `${Y}px`;

    moon.style.left = `${X}px`;
    moon.style.top = `${Y}px`;
});
