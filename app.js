var express = require('express');
var app = express();


app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/style',  express.static(__dirname + '/style'));
app.use('/script',  express.static(__dirname + '/script'));

app.get('/',function(req,res){
	res.sendFile('home.html',{'root': __dirname + '/templates'});
})

app.get('/SignInPage',function(req,res){
	res.sendFile('signin.html',{'root': __dirname + '/templates'});
})

app.get('/SignUpPage',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/templates'})
})

app.get('/WelcomePage',function(req,res){
  res.sendFile('welcome.html',{'root':__dirname + '/templates'})
})

app.listen(8000,function(){
  console.log('Node Server running @ http://localhost:8000')
});
