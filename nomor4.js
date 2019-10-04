const express = require('express')
const app = express();

app.get('/', (req, res) => {
  const dayName = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
  ];
  const date = new Date();
  const thisDay = date.getDay();
  console.log("Hari ini adalah: " + dayName[thisDay])
  
  const thisTime = date.getHours() + ':' + date.getMinutes() + ':' +  date.getSeconds() + ':' + date.getMilliseconds();
  console.log("Waktu sekarang adalah: " + thisTime)
  res.send('Nomor 4');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});