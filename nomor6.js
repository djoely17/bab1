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

  let datamapbaru;
  const addCompany = () => {
    dataMapBaru = data.map( obj => ({ name: obj.name, companyName: "MGG" }));
    dataMapBaru.forEach( function(val) { 
        return console.log(val) 
    }) 
  }

  console.log("Data Awal : ")
  data.forEach( function(val) { 
    console.log(val);
    val.companyName = "MGG";  
  })  

  console.log("Data Baru Foreach : ")
  data.forEach( function(val) { 
    console.log(val);
  })  

  console.log("Data Baru Map: ")
  addCompany();

  // const dataMap = new Map(["name", "Brendan Eich"], ["name", "Rasmus Lerdorf"]);
  // console.log(dataMap)
  // dataMap.forEach( (k, v, m) => console.log(`Name: ${v}`) );
  
  // const datamapbaru = data.map(name => "MGG");
  // console.log(datamapbaru);  

  // console.log("Data Baru Foreach : ")
  // dataMapBaru.forEach(
  //   function(val) { 
  //     console.log(val) 
  //   }
  // ) 

  res.send('Nomor 6');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});