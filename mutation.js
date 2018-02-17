console.log('Cage is here');

// Get path of extension's assets folder
const imagesURL = chrome.extension.getURL("i");

// Prepare paths of files
const pathCage = imagesURL + '/nikolas.png';
const pathJaw = imagesURL + '/jaw.png';
const pathNanana = imagesURL + '/cage.mp3';

// Create DOM nodes
let cage = document.createElement('div');
cage.className = 'cage cage_hidden';
cage.style.backgroundImage = `url(${pathCage})`

let jaw = document.createElement('div');
jaw.className = 'cage__jaw';
jaw.style.backgroundImage = `url(${pathJaw})`
cage.appendChild(jaw);

// Append to page's body
document.body.appendChild(cage);

// Load audio
let nanana = new Audio(pathNanana)
nanana.loop = true;

// Hide Cage on click on himself
cage.addEventListener('click', hideCage);


function showCage(e){
    if (cage.classList.contains('cage_hidden')) {
        cage.classList.remove('cage_hidden', 'cage_shutup');
        nanana.play();
    }
}

function hideCage(){
    cage.classList.add('cage_hidden', 'cage_shutup');
    nanana.pause();
}

// Get all links from the page and show Cage on hover
let links = [...document.querySelectorAll('a')];
links.forEach(el => {
    el.addEventListener('mouseover', showCage)
});

// Pause and play "na-na-na" on tab switching 
window.addEventListener('blur', () => {
    nanana.pause();
})

window.addEventListener('focus', () => {
    if (!cage.classList.contains('cage_hidden')) {
        nanana.play();
    }
})




