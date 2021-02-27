const mongoose = require('mongoose');
const express = require('express');
const app = express();
const model = require('../models/models')
const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://usaravi9935:UsaRavi2017@cluster0.hgfnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => {
    console.log('connected')
}).catch((e) => {
    console.log('not connected')
})


app.use(express.urlencoded({extended: false}))


app.use('/', express.static(__dirname))

app.post('/product', async (req,res) => {
    
    try{
        const a = new model({
            name: req.body.name,
            email: req.body.email
        })
        const registerd = await a.save();
        res.send(201).render(index);
    }
    catch (error) {
        res.status(400).send(error)
    }

})


app.listen(port)



