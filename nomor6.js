const express = require('express')
const app = express();

app.get('/', (req, res) => {
  const data = [
  	{
  		name: "Brendan Eich"
  	},
  	{
  		name: "Rasmus Lerdorf"
  	}
  ];

  console.log("Data Awal : ")
  data.forEach(function(val,index) { 
   console.log(val) 
   data[index].companyName = "MGG";
  })  

  console.log("Data Baru : ")
  data.forEach(function(val,index) { 
   console.log(val) 
  }) 

  res.send('Nomor 6');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});