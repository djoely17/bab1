const express = require('express')
const app = express();

app.get('/', (req, res) => {
  const number1 = 30;
  const number2 = 30;
  let number3 = null;
  if (number1 == number2) {
    number3 = (number1 + number2) * 3;
  } else {
    number3 = number1 + number2;
  }

  console.log("Number 1 : " + number1)
  console.log("Number 2 : " + number2)
  console.log("Result : " + number3)
  res.send('Nomor 3');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});