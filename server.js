const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Server Running!'))




app.listen(port, 
    () => console.log(`Simple Express app listening on port ${port}!`))

const jwt = require('jsonwebtoken');
const fs = require('fs')
    


//convert decimal to binary
app.get('/decimaltobinary', (req, res) => {

    
    const data = req.query.value;
    // console.log(data2);

    // decimal to binary
    convertBase.dec2bin = convertBase(10, 2);
    // console.log(convertBase.dec2bin(data));
     
    res.json({ 
        "message": "Convert Decimal to binary",
        "body": req.query,
        "output": convertBase.dec2bin(data)
    })

    

    function convertBase(baseFrom, baseTo) {
        return function (num) {
            return parseInt(num, baseFrom).toString(baseTo);

        };
    }

    return convertBase;


})

//start convert binary to decimal
app.get('/binarytodecimal', (req, res) => {

    
    const data = req.query.value;

    // binary to decimal
    convertBase.bin2dec = convertBase(2, 10);
    // console.log(convertBase.bin2dec(data));
     
    res.json({ 
        "message": "Convert Decimal to binary",
        "body": req.query,
        "output": convertBase.bin2dec(data)
    })

    

    function convertBase(baseFrom, baseTo) {
        return function (num) {
            return parseInt(num, baseFrom).toString(baseTo);

        };
    }

    return convertBase;


})

