 const express= require ("express")
 const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000;

app.post('/registerPatient', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient has been  registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
