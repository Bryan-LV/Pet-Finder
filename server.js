const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: process.env.PUBLIC_KEY, secret: process.env.SECRET_KEY});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/animalresult', async (req,res) => {
  const {location, type} = req.body;
  try {
    const request = await client.animal.search({location, type});
    const response = request.data.animals
    return res.json(response);

  } catch (error) {
    console.log('animal result route error');
    const msg = error.invalidParams[0].message  
    return res.status(400).json({msg});
  }
})

app.get('/animal/:id', async (req,res) => {
  try {
    const request = await client.animal.show(req.params.id);
    const response = request.data.animal;
    return res.send(response);

  } catch (error) {
    console.log('animal ID route error');
    const msg = error.invalidParams[0].message 
    return res.status(400).json({msg})
  }
})

// Server static assets in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on port 5000'))