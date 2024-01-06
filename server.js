const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Lynne Hathaway');
});


app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));
