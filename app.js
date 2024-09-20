const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routes);

app.get('/',(req, res)=>{
    res.render('index', {title:'Home Page'});
});

app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000')
})