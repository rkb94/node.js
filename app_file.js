var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.locals.pretty = true;
app.set('views', './views_file'); // 템플릿 엔진의 파일들은 ./views_file 안에 두겠다고 express에 설정을 해둔다.
app.set('view engine', 'jade'); // 어떠한 템플릿 엔진을 쓸 것인지에 대해 view engine이라고 하는 값으로 jade를 쓸것을 적는다. 이 때 jade를 설치 해야한다.
app.get('/topic/new', function(req, res){
    res.render('new');
});
app.get('/topic', function(req, res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internet Server Error');
        }
        res.render('view', {topics:files});
    })
});
app.get('/topic/:id', function(req, res){
    var id = req.params.id;
    fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internet Server Error');
        }
        fs.readFile('data/'+id, 'utf8', function(err, data){
            if(err){
                res.status(500).send('Internet Server Error');
            }
            res.render('view', {topics:files, title:id, description:data});
        })
    })
});
app.post('/topic', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title, description, function(err){
        if(err){
            res.status(500).send('Internet Server Error');
        }
        res.render('view', {title:id});
    });
})
app.listen(3000, function(){
    console.log('Connected, 3000 port!');
});