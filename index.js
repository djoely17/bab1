const express = require('express')
const app = express();

app.get('/', (req, res) => {
  const name = "Galih Julianto Purnomo";
  const age = 28;

  const filename = "system.php";
  const filename1 = "abc.js";

  this[name] = age;
  console.log(this[name])

  // res.send('Nama file : ' + filename + '\n');
  console.log(filename.split('.').pop());
  // res.send('File Extension : ' + filename.split('.').pop() + '\n');
  console.log(filename1.split('.').pop());
  // res.send('Nama file : ' + filename1 + '\n');
  const number1 = 30;
  const number2 = 30;
  if (number1 == number2) {
    console.log( (number1 + number2) * 3 );
  };

  const dayName = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
  ];
  let date = new Date();
  let thisDay = date.getDay();
  console.log('Hari ini adalah: ' + dayName[thisDay]);
  let thisTime = date.getHours() + ':' + date.getMinutes() + ':' +  date.getSeconds() + ':' + date.getMilliseconds();
  console.log('Waktu sekarang adalah: ' + thisTime);

  let dateFormat = new Date('dd/mm/yyyy');
  console.log(dateFormat);
  res.send('Bab 1');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});