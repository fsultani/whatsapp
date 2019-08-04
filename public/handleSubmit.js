const handleSubmit = () => {
  const phoneNumber = document.whatsAppForm.phoneNumber;
  const number = phoneNumber.value;

  if (number) {
    axios.post('/start', {
      number
    }).then(res => {
      window.open(res.data);
    })
  }
}
