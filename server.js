const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Server Running!'))




app.listen(port, 
    () => console.log(`Simple Express app listening on port ${port}!`))



app.get('/decimaltobinary', (req, res) => {

    
    const data = req.query.value;

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

app.get('/binarytodecimal', (req, res) => {

    
    const data = req.query.value;

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


app.get('/palindrome', (req, res) => {



    function findPalindromes(str, min) {
        min = min || 3;
        var result = [];
        var reg = str.toLowerCase();
        var reg = reg.replace(/[^a-z]/g, '');
        var rev = reg.split("").reverse().join("");
        var l = reg.length;
        for (var i = 0; i < l; i++) {
          for (var j = i + min; j <= l; j++) {
            var regs = reg.substring(i, j);
            var revs = rev.substring(l - j, l - i);
            if (regs == revs) {
              result.push(regs);
            }
          }
        }
        return result;
      }
      
      res.json("test aja")
      var paragraph1 = "aku suka makan nasi";
      console.log(paragraph1, findPalindromes(paragraph1)[0]);
      
})