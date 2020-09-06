const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const img = 
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('server/public'))

app.listen(PORT, function(){
    console.log('listening on PORT 5000')
})