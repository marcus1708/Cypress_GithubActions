document.addEventListener('DOMContentLoaded', function () {
  const emailCheckbox = document.getElementById('email-checkbox');
  const phoneCheckbox = document.getElementById('phone-checkbox');
  const emailLabelSpan = document.querySelector('.email-label-span');
  const phoneLabelSpan = document.querySelector('.phone-label-span');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');

  if (emailCheckbox) {
    emailCheckbox.checked = false;
    emailCheckbox.addEventListener('change', function () {
      if (this.checked) {
        emailLabelSpan.style.display = 'inline';
        emailField.required = true;
      } else {
        emailLabelSpan.style.display = 'none';
        emailField.required = false;
      }
    });
  }

  if (phoneCheckbox) {
    phoneCheckbox.checked = false;
    phoneCheckbox.addEventListener('change', function () {
      if (this.checked) {
        phoneLabelSpan.style.display = 'inline';
        phoneField.required = true;
      } else {
        phoneLabelSpan.style.display = 'none';
        phoneField.required = false;
      }
    });
  }
});