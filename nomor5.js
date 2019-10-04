const express = require('express')
const app = express();

app.get('/', (req, res) => {
  const date = new Date();
  const dateFormat = date.toJSON().slice(0, 10); 
  const formDate = dateFormat.slice(8, 10) + '/' + dateFormat.slice(5, 7) + '/' + dateFormat.slice(0, 4); 
  console.log("Date (dd/mm/yyyy) : " + formDate)
  res.send('Nomor 5');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});