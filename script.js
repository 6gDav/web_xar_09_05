const hello1 = document.querySelector('#hello')
const container = document.querySelector('#container')

hello1.addEventListener('click', ()=> {
    let card = document.createElement('div')
    card.innerText = Math.floor(Math.random()*6+1)
    container.append(card)
})

function generateRandomNumber() {
    const idkDiv = document.querySelector('#idk');
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    idkDiv.innerHTML = '<p>Véletlenszerű szám: ' + randomNumber + '</p>';
}

