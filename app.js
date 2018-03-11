var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'pug'); //express와 pug를 결합시킴
app.set('views', './views'); //환경설정
app.use(express.static('public'));

app.get('/topic/:id', function(req, res){
    var topics = [
        'Javascrit is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output =`
        <a href="/topic?id=0">JavaScript</a><br>
        <a href="/topic?id=1">Nodejs</a><br>
        <a href="/topic?id=2">Express</a><br><br>
        ${topics[req.params.id]}
    `
    res.send(output);
});
app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id+','+req.params.mode);
});
app.get('/template', function(req, res){
    res.render('temp', {time: Date(), title: 'Jade'}); //render 메소드 첫 번째 인자로 템플릿의 이름을 정한다. 그 후 사용자에게 response 해줌.
    //템플릿의 데이터를 주입할 때에는 객체의 property 값으로 전달한다.
});
app.get('/', function(req, res){
    res.send('Hello home page');
});
app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`
    res.send(output)
})
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/fdmt.png">');
})
app.get('/login', function(req, res){
    res.send('Login please')
})
app.listen(3000, function(){
    console.log('Connected 3000 port!');
});