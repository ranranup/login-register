var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// 静态资源目录
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());

//  主页输出 "Hello World"
app.post('/getTest', function (req, res) {
   // 输出 JSON 格式
    var response = {
        msg: ''
    };
    var userName = req.body.userName;
    var password = req.body.password;

    if(userName=="admin" && password=="111111"){
        response.msg = 'success';
    } else {
        response.msg = 'failure';
    }
   res.end(JSON.stringify(response));
})
app.get('/checkUserName', function (req, res) {
    var userName = req.query.userName;

    var response = {
        msg: ''
    };
    if(userName=="admin"){
        response.msg = 'exist';
    } else {
        response.msg = 'inexist';
    }
   res.end(JSON.stringify(response));
})
app.get('/register', function (req, res) {
    res.sendFile( __dirname + "/" + "register.html" );
})
app.get('/login', function (req, res) {
    res.sendFile( __dirname + "/" + "login.html" );
})

//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})