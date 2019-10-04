const express = require('express')
const app = express();

app.get('/', (req, res) => {
  const name = "Galih Julianto Purnomo";
  const age = 28;
  this[name] = age;
  console.log('Name : ' + name)
  console.log('Age : ' + age)
  console.log('User Defined : ' + this[name])
  res.send('Nomor 1');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});