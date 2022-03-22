const buttonList = document.querySelectorAll('.rating div')
const submitButton = document.getElementsByTagName('button')[0]
const rating = document.querySelector('.show-rating')
const firstContainer = document.querySelector('.first')
const thankYou = document.querySelector('.thank-you')

for (let button of buttonList) {
  button.addEventListener("click", () => {
    const value = button.innerText;
    rating.innerText = `You selected  ${value} out of 5`
    removeActive()
    button.classList.add('active')
    
  })
}

const removeActive = () => {
  for (let button of buttonList) {
    button.classList.remove('active')
  }
}

submitButton.addEventListener("click", () => {
  firstContainer.style.display = 'none'
  thankYou.style.display = 'flex'
})
