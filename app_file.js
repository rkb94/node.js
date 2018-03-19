var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('views', './views_file'); // 템플릿 엔진의 파일들은 ./views_file 안에 두겠다고 express에 설정을 해둔다.
app.set('view engine', 'jade'); // 어떠한 템플릿 엔진을 쓸 것인지에 대해 view engine이라고 하는 값으로 jade를 쓸것을 적는다. 이 때 jade를 설치 해야한다.
app.get('/topic/new', function(req, res){
    res.render('new');
})
app.post('/topic', function(req, res){
    res.send('Hi, post');
})
app.listen(3000, function(){
    console.log('Connected, 3000 port!');
});