const form = document.querySelector('.form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateInputs()
})
const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = message
  inputControl.classList.add('error')
  inputControl.classList.remove('success')
}
const setSuccess = (element) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = ''
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
  const fnameValue = fname.value.trim()
  const lnameValue = lname.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if (fnameValue === '') {
    setError(fname, 'First Name cannot be empty')
  } else {
    setSuccess(fname)
  }
  if (lnameValue === '') {
    setError(lname, 'Last Name cannot be empty')
  } else {
    setSuccess(lname)
  }

  if (emailValue === '') {
    setError(email, 'Email is required')
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Looks like this is not an email')
  } else {
    setSuccess(email)
  }

  if (passwordValue === '') {
    setError(password, 'Password cannot be empty')
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 character.')
  } else {
    setSuccess(password)
  }
}
