const express = require('express');
const port = process.env.PORT;
const app = express();
const router = require('./routes');

const mongoose = require('mongoose');

const mongodb = process.env.DATABASE_URL;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

mongoose.connect(mongodb);

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error'));

app.get('/', (req, res) => {
    res.send('hello !');
});

app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});