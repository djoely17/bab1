const express = require('express')
const app = express();

app.get('/', (req, res) => {
  const fileName = "system.php";
  const fileName1 = "abc.js";

  const fileExt = fileName.split('.').pop();
  const fileExt1 = fileName1.split('.').pop();

  console.log("Nama File: " + fileName)
  console.log("File Extension: " + fileExt)
  console.log("Nama File: " + fileName1)
  console.log("File Extension: " + fileExt1)
  res.send('Nomor 2');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});