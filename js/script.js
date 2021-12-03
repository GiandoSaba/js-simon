function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function createRandomArray(num){
    const arrayRandom = [];
    for (let i = 0; i < num; i++) {
        let numberRandom = getRandomIntInclusive(1,20);
        while (arrayRandom.includes(numberRandom)) {
            numberRandom = getRandomIntInclusive(1, 20);
        }
        arrayRandom.push(numberRandom);
    }

    return arrayRandom;
}

// Visualizzare in pagina 5 numeri casuali.

const randomList = document.querySelector('.list-random');
const userList = document.querySelector('.list-user');
let seconds = 30;

const randomNumber = createRandomArray(5);

for (let i = 0; i < randomNumber.length; i++) {
    const listItem = document.createElement('li');
    listItem.append(randomNumber[i]);
    randomList.append(listItem);
    
}

const timer = setInterval(() => {
    const second = document.getElementById('seconds');
    if (seconds > 0) {
        second.innerText = seconds;
        seconds--;
    } else {
        second.innerText = 'Tempo scaduto'
        randomList.innerHTML = '';
        console.log(seconds);
        clearInterval(timer);
    }
}, 1000);

// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

