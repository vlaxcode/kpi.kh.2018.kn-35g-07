const express = require('express');
const app = express();
const path = require('path');

app.use('/css', express.static("./build/css"));
app.use('/js', express.static("./build/js"));
app.use('/images', express.static("./build/images"));
app.use('/fonts', express.static("./build/fonts"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, './build', '404.html'));
});


app.listen(3000);
console.log('Server running at http: http://localhost:3000');