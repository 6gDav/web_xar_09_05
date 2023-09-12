document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.getElementById('cardContainer')
  const addCardButton = document.getElementById('addCardButton')

  function createRandomCard() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const card = document.createElement('div')
    card.className = 'card'
    card.textContent = randomNumber
    cardContainer.appendChild(card)
  }

  addCardButton.addEventListener('click', createRandomCard)

  // Create 10 initial random cards
  for (let i = 0; i < 10; i++) {
    createRandomCard()
  }
})
