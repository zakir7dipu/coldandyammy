const express = require('express');
const sequelize = require('./database');
const Icream = require('./model/icream');

sequelize.sync(
    {force:true}
).then(()=>console.log('db is connected'))

const app = express();
app.use(express.json())

app.post('/icream', async (req, res) => {
    await Icream.create(req.body);
    res.send('Icream Stored');
})

app.get('/icreams', async (req, res) => {
    const icreams = await Icream.findAll();
    res.send(icreams)
})

app.get('/icream/:id', async (req, res) => {
    const requestId = req.params.id;
    const icream = await Icream.findOne({where:{id: requestId}});
    res.send(icream)
})

app.put('/icream/:id', async (req, res) => {
    const requestId = req.params.id;
    const icream = await Icream.findOne({where:{id: requestId}});
    icream.name = 'Vanilla'
    await icream.save();
    res.send(icream)
})

app.delete('/icream/:id', async (req, res) => {
    const requestId = req.params.id;
    await Icream.destroy({where:{id: requestId}});
    res.send('Deleted')
})

app.listen(3131, () => {
    console.log('Server is running')
});