const express = require('express');

const app = express();

app.use(express.static('./server'));
app.use(express.static('./target'));

app.listen(3000);