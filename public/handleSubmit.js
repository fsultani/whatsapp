const handleSubmit = () => {
  const phoneNumber = document.whatsAppForm.phoneNumber;
  let number = phoneNumber.value;

  if (typeof number !== 'string') {
    const errorMessage = document.querySelector('.error-message')
    return errorMessage.innerHTML = 'Invalid input';
  }

  const hasPlusSymbol = number.charAt(0) === '+'

  if (hasPlusSymbol) {
    number = number.substring(1);
  }

  axios.post('/start', {
    number
  }).then(res => {
    window.location.href = res.data;
  })
}
