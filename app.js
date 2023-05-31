const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });

const port = proces.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});