const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Chegado!'));

app.listen(port, () => console.log(`Exemple app listening por ${port}!`));

