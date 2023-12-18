# 10862078
# Function Endpoints

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

##
