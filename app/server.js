let express = require('express');
let app = express();

app.listen(3000, ()=>{
    console.log('its up now....');
})

let route = express.Router();



console.log('__dirname', __dirname);
app.use(express.static('public'));
app.use('/', route);
route.get('/name', (req, res)=>{
    res.send({
        name:'vinayak',
        address:'banglore'
    })
})
