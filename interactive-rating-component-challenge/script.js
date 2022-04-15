const numbers = document.querySelectorAll('.number')
const selects = document.querySelectorAll('.select')
const submit = document.querySelector('.submit')
const container = document.querySelector('.container')
const thankyou = document.querySelector('.thankyou')
const yourrating = document.querySelector('.yourrating')

let ratingValue = 0

numbers.forEach((num, idx) => {
  num.addEventListener('click', () => {
    ratingValue = idx + 1
    update(idx)
  })
})
function update(idx) {
  numbers.forEach((num) => num.classList.remove('select'))
  numbers[idx].classList.add('select')
}
submit.addEventListener('click', () => {
  if (ratingValue === 0) {
    return
  }
  container.style.display = 'none'
  thankyou.style.display = 'block'
  yourrating.innerText = `You selected ${ratingValue} out of ${numbers.length}`
})
