let isPhoneRequired = false
let isEmailRequired = false

const phoneLabelSpan = document.querySelector('.phone-label-span')
const phoneField = document.getElementById('phone')
const emailLabelSpan = document.querySelector('.email-label-span')
const emailField = document.getElementById('email')

document.querySelector('#phone-checkbox')
  .addEventListener('change', function() {
    if (this.checked) {
      phoneLabelSpan.style.display = 'inline'
    } else {
      phoneLabelSpan.style.display = 'none'
    }
    phoneField.required = !isPhoneRequired
    isPhoneRequired = !isPhoneRequired
  })
// Adiciona o evento de mudança ao checkbox "E-mail"
document.querySelector('#email-checkbox')
  .addEventListener('change', function() {
    if (this.checked) {
      emailLabelSpan.style.display = 'inline'
    } else {
      emailLabelSpan.style.display = 'none'
    }
    emailField.required = !isEmailRequired
    isEmailRequired = !isEmailRequired
  })
document.querySelector('button[type="submit"]')
  .addEventListener('click', function(event) {
    event.preventDefault()
    const firstNameField = document.getElementById('firstName')
    const JobField = document.getElementById('Job')
    const emailInput = document.getElementById('email')
    const textareaField = document.getElementById('open-text-area')
    const productField = document.getElementById('product')
    const helpRadio = document.querySelector('input[value="ajuda"]')
    const emailCheckbox = document.getElementById('email-checkbox')
    const phoneCheckbox = document.getElementById('phone-checkbox')
    const fileField = document.querySelector('input[type="file"]')
    const successMessage = document.querySelector('.success')
    if (!firstNameField.value || !JobField.value || !emailInput.value || !textareaField.value) {
      return showAndHideErrorMessage()
    }
    if (isPhoneRequired && !phoneField.value) {
      return showAndHideErrorMessage()
    }
    if (isEmailRequired && !emailField.value) {
      return showAndHideErrorMessage()
    }
    if (!emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return showAndHideErrorMessage()
    }
    firstNameField.value = ''
    JobField.value = ''
    emailInput.value = ''
    textareaField.value = ''
    phoneField.value = ''
    productField.selectedIndex = 0
    helpRadio.checked = true
    emailCheckbox.checked = false
    phoneCheckbox.checked = false
    fileField.value = ''
    phoneLabelSpan.style.display = 'none'
    successMessage.style.display = 'block'
    isPhoneRequired = false
    isEmailRequired = false
    scroll(0,0)
    hideMessageAfterTimeout(successMessage)
  }, false)

function showAndHideErrorMessage() {
  const errorMessage = document.querySelector('.error')
  errorMessage.style.display = 'block'
  scroll(0,0)
  hideMessageAfterTimeout(errorMessage)
  return
}

function hideMessageAfterTimeout(element) {
  setTimeout(function() {
    element.style.display = 'none'
  }, 3000)
}
