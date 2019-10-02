var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Number 1
  const name = "Galih Julianto Purnomo";
  const age = 28;
  this[name] = age;
  console.log(this[name])

  // Number 2
  const fileName = "system.php";
  const fileName1 = "abc.js";

  const fileExt = fileName.split('.').pop();
  const fileExt1 = fileName1.split('.').pop();
  console.log(fileExt)
  console.log(fileExt1)

  // Number 3
  const number1 = 30;
  const number2 = 30;
  let number3 = null;
  if (number1 == number2) {
    number3 = (number1 + number2) * 3;
  } else {
    number3 = number1;
  }
  console.log(number3)

  // Number 4
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
  console.log(dayName[thisDay])
  
  let thisTime = date.getHours() + ':' + date.getMinutes() + ':' +  date.getSeconds() + ':' + date.getMilliseconds();
  console.log(thisTime)

  // Number 5
  var dateFormat = date.toJSON().slice(0, 10); 
  var nDate = dateFormat.slice(8, 10) + '/' + dateFormat.slice(5, 7) + '/' + dateFormat.slice(0, 4); 
  console.log(nDate)

  // Number 6
  const nilai = [
  	{
  		name: "Brendan Eich"
  	},
  	{
  		name: "Rasmus Lerdorf"
  	}
  ];

  console.log(JSON.stringify(nilai))

  nilai[0].companyName = "MGG";
  nilai[1].companyName = "MGG";
  console.log(JSON.stringify(nilai))

  res.render('index', { title: 'Bab 1', userDefined: this[name], fileTest: fileName, extTest: fileExt, fileTest1: fileName1, extTest1: fileExt1, number: number3, today: dayName[thisDay], timeNow: thisTime, formatDate: nDate, nilai: JSON.stringify(nilai) });
});

module.exports = router;
