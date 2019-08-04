const handleSubmit = () => {
  const phoneNumber = document.whatsAppForm.phoneNumber;
  const number = phoneNumber.value;

  if (number) {
    axios.post('/start', {
      number
    }).then(res => {
      const windowName = 'userConsole';
      const popUp = window.open('/popup-page.php', windowName, 'width=1000, height=700, left=24, top=24, scrollbars, resizable');
      if (popUp == null || typeof(popUp)=='undefined') {  
        alert('Please disable your pop-up blocker and click the "Open" link again.'); 
      } 
      else {  
        window.open(res.data);
      }
    })
  }
}
