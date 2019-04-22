const express = require('express');
const app = express();
const path = require('path');
const alert = require('alert-node');
// var $ = cheerio.load('<div class="alert text-center alert-success" role="alert"><h4 class="alert-heading" id="diagnose-result">Diagnose Results</h4><p id="predictions">12</p><hr><p class="mb-0" id="probabilities">23</p></div>');

const fs = require('fs');
const router = express.Router();

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded())

// router.get('/predictions', (res, req) => {
//     res.jsonp({success : t})
// });

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

router.get('/UserView',function(req,res){
  res.sendFile(path.join(__dirname+'/UserView.html'));
});

router.get('/DoctorView',function(req,res){
    res.sendFile(path.join(__dirname+'/DoctorView.html'));

    // fs.readFile('DoctorView.html', 'utf8', dataLoaded);

    // function dataLoaded(err, data) {
    //     $ = cheerio.load(data);
    //     ($("#predictions").text("hello"));
    // } 

  });

app.post('/submit-heart-dataset', (req, res) => {

    /**
     * creating a csv file
     */
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
    const csvWriter = createCsvWriter({  
    path: 'out.csv',
    header: [
        {id: "age", title: "age"},
        {id: "trestbps", title: "trestbps"},
        {id: "restecg", title: "restecg"},
        {id: "thalach" , title: "thalach"},
        {id: "exang", title: "exang"},
        {id: "oldpeak", title: "oldpeak"},
        {id: "slope", title: "slope"},
        {id: "ca", title: "ca"},
        {id: "thal", title: "thal"}
    ]});


    const data = [{
        age: req.body.age,
        trestbps: req.body.trestbps,
        restecg: req.body.restecg,
        thalach: req.body.thalach,
        exang: req.body.exang,
        oldpeak: req.body.oldpeak,
        slope: req.body.slope,
        ca: req.body.ca,
        thal: req.body.thal
    }];

    csvWriter.writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));

    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['findHeartModel.py']);

    pyProg.stdout.on('data', function(data) {
    });

    const child_process = require("child_process");
    // Sleep for 10 seconds
    child_process.execSync("sleep 7");

    let rawdata = fs.readFileSync('prediit.json');  
    let result = JSON.parse(rawdata);


    alert( 'Risk of disease: ' + result['target_predictions']['0']);
    alert( 'Chance of Infection : ' + result['target_probabilities']['0']);

    res.redirect('/DoctorView');

    res.end();
});


app.post('/submit-hepatitis-dataset', (req, res) => {

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
    const csvWriter = createCsvWriter({  
    path: 'out.csv',
    header: [
        {id: "age", title: "age"},
        {id: "steroid", title: "steroid"},
        {id: "bilirubin" , title: "bilirubin"},
        {id: "alk_phosphate", title: "alk_phosphate"},
        {id: "sgot", title: "sgot"},
        {id: "albumin", title: "albumin"},
        {id: "protime", title: "protime"}
    ]});

    const data = [{
        age: req.body.age,
        steroid: req.body.steroid,
        bilirubin: req.body.bilirubin,
        alk_phosphate: req.body.alk_phsosphate,
        sgot: req.body.sgot,
        albumin: req.body.albumin,
        protime: req.body.protime
    }];

    csvWriter.writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));

    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['findHepatitis.py']);

    pyProg.stdout.on('data', function(data) {
    });

    var sleep = require('sleep'); 
    sleep.sleep(10);

    let rawdata = fs.readFileSync('prediit.json');  
    let result = JSON.parse(rawdata);  

    alert( 'Risk of disease: ' + result['target_predictions']['0']);
    alert( 'Chance of Infection : ' + result['target_probabilities']['0']);

    res.redirect('/DoctorView');
    
    res.end();
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');