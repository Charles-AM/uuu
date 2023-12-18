# 10862078
# Functional  Endpoints

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
