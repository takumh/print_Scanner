
const express = require('express')
const serversideOCR = require('./server/server_ocr')
const fetch = require('node-fetch');

const app = express()
const port = 3000
app.use(express.json({ limit: 500000}));

app.use(express.static('public'))

app.get('/ocr', function (req, res) {
    console.log("starting ocr on server");
    console.log(req.query.imageUrlData);
    var result = serversideOCR.runOcr(req.query.imageUrlData);
    result.then(val => {
        console.log(val);
        res.send(val);
    }).catch(e => {
        console.log(e);
    });
});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

//for running purposes in terminal
//node  --max-http-header-size=1000000 app.js
