const express = require('express');
const Dog = require('./models/Dog');

const router = express.Router();

router.get('/dogs', async (req,res) => {
    const dogs = await Dog.find();

    res.send(dogs);
})

router.post('/dogs_create', async (req,res) => {
    const dogs = new Dog({
        name: req.query.name,
        color: req.query.color,
        race: req.query.race
    });
    await dogs.save();
    res.send(dogs);
})

module.exports = router;