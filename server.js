 const express= require ("express")
 const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000;

mongoose.connect(mongodb+srv://Charles:<12345678uuu>@cluster0.mxzn0dx.mongodb.net/)
.then(() =>{
console.log("MONGODB running")

 const patientSchema = new mongoose.Schema({
  patientID: String,
  surname: String,
  otherNames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String,
  },
});

const encounterSchema = new mongoose.Schema({
  patientID: String,
  dateAndTime: Date,
  encounterType: String,
});

const vitalSignsSchema = new mongoose.Schema({
  patientID: String,
  bloodPressure: String,
  temperature: String,
  pulse: String,
  spo2: String,
});

// Create MongoDB Models
const Patient = mongoose.model('Patient', patientSchema);
const Encounter = mongoose.model('Encounter', encounterSchema);
const VitalSigns = mongoose.model('VitalSigns', vitalSignsSchema);

app.use(bodyParser.json());

app.post('/registerPatient', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient has been  registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/startEncounter', async (req, res) => {
  try {
    const newEncounter = new Encounter(req.body);
    await newEncounter.save();
    res.status(201).json({ message: 'Encounter started successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/submitVitals', async (req, res) => {
  try {
    const newVitalSigns = new VitalSigns(req.body);
    await newVitalSigns.save();
    res.status(201).json({ message: 'Vitals submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/viewPatients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/viewPatient/:patientID', async (req, res) => {
  try {
    const patient = await Patient.findOne({ patientID: req.params.patientID });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
