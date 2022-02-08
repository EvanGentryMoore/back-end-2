const express = require('express');
const cors = require('cors');
const port = 4004;
const ctrl = require('./controller');
const app = express();

app.use(express.json());
app.use(cors());

//Ednpoints
app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

app.listen(port, () => {
    console.log(`News Team Assemble... on ${port}`)
});