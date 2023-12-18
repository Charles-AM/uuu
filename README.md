# 10862078
# Functional  Endpoints

# Electronic Medical Record System (EMR)

Welcome to the Electronic Medical Record System (EMR) – a backend application designed to manage patient records for the University of Chana Medical Center (UCMC). This system is built using Node.js, Express, and MongoDB.

## Overview

The EMR system facilitates the recording and management of patient information, encounters, and vital signs. It provides a set of RESTful APIs for various functionalities, allowing front-end systems to interact with the backend.

## Register Patients:
This includes the endpoint /registerPatient :

app.post('/registerPatient', async (req, res) => {

  try {
  
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient has been  registered successfully' });
  } catch (error) {
  
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

## Start Encounter:
This includes the endpoint /startEncounter 
app.post('/startEncounter', async (req, res) => {

  try {
  
    const newEncounter = new Encounter(req.body);
    await newEncounter.save();
    res.status(201).json({ message: 'Encounter started successfully' });
  } catch (error) {
  
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

## Submit Vitals:
This includes the endpoint /submitVitals
app.post('/submitVitals', async (req, res) => {

  try {
  
    const newVitalSigns = new VitalSigns(req.body);
    await newVitalSigns.save();
    res.status(201).json({ message: 'Vitals submitted successfully' });
  } catch (error) {

## View List of Patients:
This includes the endpoint /viewPatients.
app.get('/viewPatients', async (req, res) => {
  try {
  
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
  
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
  
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

## View patient details
app.get('/viewPatient/:patientID', async (req, res) => {

  try {
  
    const patient = await Patient.findOne({ patientID: req.params.patientID });
    res.status(200).json(patient);
  } catch (error) {
  
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
