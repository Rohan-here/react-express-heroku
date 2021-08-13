const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');
const path = require('path')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//POST route - PDF fetch data and genrate pdf

app.post('/create-pdf', (req, res) => {
    console.log(req.body);
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});


//GET route - send generated PDF

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
})


app.listen(port, () => console.log(`Listening on port ${port}`))