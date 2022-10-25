const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/views/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')});


app.get('/views/about', (req, res) =>  {
    res.sendFile(__dirname + '/views/about.html')} );
    


app.get('/views/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')});

app.get('/views/photo-gallery', (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html')});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});