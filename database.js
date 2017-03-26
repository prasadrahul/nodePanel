//mysql
var mysql = require("mysql");

// connect strings for mysql
var connection = mysql.createConnection({
	host:       "localhost",
	user:       "root",
	password:   "mysqlpassword",
	database:   "node_mysql"
});

// connecting ..
connection.connect();

connection.query("SELECT `name` FROM node_user_details WHERE email = 'prasad_rahul@yahoo.co.in'", function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].name);
});

connection.end();


// // exports 2 methods for other modules or files to use
// module.exports = {
//   conn : function (callback)
//     {
//     // connect strings for mysql
//     var connection = mysql.createConnection({
//         host:       "localhost",
//         user:       "root",
//         password:   "mysqlpassword",
//         database:   "node_mysql"
//             });
//     connection.connect();
//         },
//   execute : function( rawquery, callback ){
//     // connecting ..
    
//     connection.query("rawquery", function (error, results, fields) {
//     if (error) throw error;
//     // console.log('The solution is: ', results[0].name);
//         var data = connection.results;
//     });
//     // connection.end();
//     // execute the callback if there is one
//     callback && callback( data.toString());
//   },
 
//   print : function( data ){
//     // print out the data
//     console.log( data );
//   }
// };

//CREATE TABLE `node_mysql`.`node_user_details`
// ( `id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(50), `email` VARCHAR(50), `passwd` VARCHAR(255), PRIMARY KEY (`id`) ); 
//
// INSERT INTO `node_mysql`.`node_user_details` (`id`, `name`, `email`, `passwd`) 
// VALUES ('1', 'rahul prasad', 'prasad_rahul@yahoo.co.in', password('1')); 
// ======================


// bcrypt
// var bcrypt = require("bcrypt");

// // body-parser
// var bodyParser = require("body-parser");
// var urlEncodedParser = bodyParser.urlencoded({extended: false});

// // express
// var express = require("express");
// var app = express();

// //mysql
// var mysql = require("mysql");
// // connect strings for mysql
// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "somePass",
// 	database: "mysql"
// });

// // connecting ......
// connection.connect();

// // requesting express to get data as text
// app.use(bodyParser.text());

// // using express for post method
// app.post("/somePage", urlEncodedParser, function(request, response) {
// 	if(request.url!="/favicon.ico") {
// 		if(request.body.regOrLogin=="Register") {
// 			bcrypt.genSalt(10, function(err, salt) {
// 				bcrypt.hash(request.body.pwd, salt, function(err, hash) {
// 					var body = request.body;
// 					var date = new Date();
// 					var currentDate = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay();
// 					var postVars = {username: body.username, password: hash, dob: body.dob, reg_date: currentDate};
// 					// insertion into MySQL
// 					connection.query("INSERT INTO REG_NODEJS set ?", postVars, function(err, result) {
// 						if(err) throw err;
// 					});
// 				});
// 			});
// 			console.log("user registered");
// 			response.sendFile( "/js/nodejs/folder1/regSuccess.html");
// 		} else if (request.body.regOrLogin=="Login") {
// 			var  body = request.body;
// 			console.log(body.username+": username");
// 			connection.query("SELECT * FROM REG_NODEJS WHERE username='"+body.username+"'", function(err, res, fields){
// 				if(err) { 
// 					response.sendFile( "/js/nodejs/folder1/unauthorised.html");
// 				} else {
// 					bcrypt.compare(body.pwd, res[0].password, function(err, res) {
// 						if(res) {
// 							console.log("authorised user");
// 							response.sendFile( "/js/nodejs/folder1/authorised.html");
// 						} else {
// 							console.log("not an authorised user");
// 							response.sendFile( "/js/nodejs/folder1/unauthorised.html");
// 						}
// 					});
// 				}
// 			});
// 		}
// 	}
// });

// app.listen(3000);