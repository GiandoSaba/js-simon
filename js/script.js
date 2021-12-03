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

let seconds = 30;

const randomNumbers = createRandomArray(5);
const userNumbers = [];

function createListDom(list) {
    const listElement = document.createElement('ul');
    listElement.classList.add('num-container');

    if (list == randomNumbers) {
        listElement.append('Numeri random: ');
        listElement.classList.add('list-random');
    } else if (list == userNumbers) {
        listElement.append('Numeri inseriti: ');
        listElement.classList.add('list-user');
    }
    
    for (let i = 0; i < list.length; i++) {
        const listItem = document.createElement('li');
        listItem.append(list[i]);
        listElement.append(listItem);
    }
    
    return listElement;
}

const main = document.querySelector('main');
main.append(createListDom(randomNumbers));
const second = document.getElementById('seconds');
second.innerText = seconds;

// Da lì parte un timer di 30 secondi.
setTimeout(() => {
    main.innerHTML = '';

    alert('Inserisci i numeri visualizzati uno per volta')
    let point = 0;
    for (let i = 0; i < randomNumbers.length; i++) {
        const userNumber = parseInt(prompt('Inserisci un numero'));
        userNumbers.push(userNumber);
        if (randomNumbers.includes(userNumber)) {
            point++;
        }
    }

    const title = `<h1>Hai inserito correttamente ${point} numeri</h1>`;
    main.innerHTML = title;
    main.append(createListDom(randomNumbers));
    main.append(createListDom(userNumbers));

    const userList = document.querySelectorAll('.list-user li');
    const randomList = document.querySelectorAll('.list-random li');

    console.log(userList);
    for (let i = 0; i < randomList.length; i++) {
        const number = parseInt(userList[i].innerText);
        if(randomNumbers.includes(number)){
            userList[i].classList.add('green');
        } 
        
    }


}, ((seconds+2)*1000));


const timer = setInterval(() => {
    if (seconds > 0) {
        second.innerText = seconds;
        seconds--;
    } else {
        second.innerText = '0'
        clearInterval(timer);
    }
}, 1000);

// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.