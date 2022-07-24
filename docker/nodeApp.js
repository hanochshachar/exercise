const express = require('express');
const dotenv = require('dotenv');
var os = require("os");
dotenv.config();
const app = express();
 
const port = 9090;


app.get('/', (req, res) => {
    res.send(os.hostname());
});


app.listen(port, ()=>{
    console.log('Server started on port ' + port);
});