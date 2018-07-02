var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', { title: 'Express' });
});





var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'craig',
  password : '......',
  database : 'api'
});
/* connection.connect()
router.get('/cat', function(req, res, next) {
  


  connection.query('SELECT `categoryID`, `categoryname` from `Categories` ', function (err, rows, fields) {
    if (err) throw err

   
     
   
     
      res.send(
rows


      );
     
    
  
    
  })
  
  connection.end()

  
}); */
module.exports = router;
