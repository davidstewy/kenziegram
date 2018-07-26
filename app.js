const express = require("express");
const multer = require('multer');
const fs = require('fs');
const app = express();
const hostname = null;
const port = 3000;
const path = './public/uploads';


app.use(express.static('./public'))
app.use(express.json());

app.get('/', function(request, response){

    fs.readdir(path, function(err, items) {
        console.log(items);
        let feed = ``;
        items.map(image => feed += `<img src='./uploads/${image}'>`)

        response.send(`<h1>Welcome to Kenziegram!</h1>
        ${feed}`
    );
    });
});

app.post('')


app.listen(port, function(){
    console.log('server workin...huzzah!');
})