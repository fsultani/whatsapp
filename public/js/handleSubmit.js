const phoneNumber = document.whatsAppForm.phoneNumber;
const number = phoneNumber.value;

const handleSubmit = () => {
  axios.post('https://api.whatsapp.com/send?phone=17409661517', {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }).then(res => {
    console.log("res\n", res)
  })
  // fetch('https://jsonplaceholder.typicode.com/users/', {
  //   method: "POST",
  //   body: JSON.stringify({ name: "Test User 1" })
  // })
  // .then(response => {
  //   console.log("response\n", response)
  //   return response.json()
  // })
  // .then(json => {
  //   console.log("json\n", json)
  // })

  // fetch('https://api.whatsapp.com/send?phone=17409661517', {
  //   method: 'POST',
  // })
  // .then(response => response.json())
  // .then(json => {
  //   console.log("json\n", json)
  // })

  // .then(json)
  // .then(function (data) {
  //   console.log('Request succeeded with JSON response', data);
  // })
  // .catch(function (error) {
  //   console.log('Request failed', error);
  // });
}
