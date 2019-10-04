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

  console.log("Data Awal : " + JSON.stringify(data))

  data[0].companyName = "MGG";
  data[1].companyName = "MGG";
  console.log("Data Baru : " + JSON.stringify(data))
  res.send('Nomor 6');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});