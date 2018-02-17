const imagesURL = chrome.extension.getURL("i");
const pathCage = imagesURL + '/nikolas.png';
const pathJaw = imagesURL + '/jaw.png';
const pathNanana = imagesURL + '/cage.mp3';

let timeout = Math.random() * 300 + 1000;

let cage = document.createElement('div');
cage.className = 'cage cage_hidden';
cage.style.backgroundImage = `url(${pathCage})`

let jaw = document.createElement('div');
jaw.className = 'cage__jaw';
jaw.style.backgroundImage = `url(${pathJaw})`
cage.appendChild(jaw);

document.body.appendChild(cage);

let nanana = new Audio(pathNanana)
nanana.loop = true;

cage.addEventListener('click', hideCage);

function showCage(e){
    if (cage.classList.contains('cage_hidden')) {
        cage.classList.remove('cage_hidden');
        nanana.play();
    }
}

function hideCage(){
    cage.classList.add('cage_hidden', 'cage_shutup');
    nanana.pause();
}

window.addEventListener('blur', () => {
    nanana.pause();
})

let links = [...document.querySelectorAll('a')];

links.forEach(el => {
    el.addEventListener('mouseover', showCage)
});

window.addEventListener('focus', () => {
    if (!cage.classList.contains('cage_hidden')) {
        nanana.play();
    }
})




