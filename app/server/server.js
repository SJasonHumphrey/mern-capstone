//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const http = require('http');
const https = require('https');
require('./db')
let app = express();
const port = process.env.PORT || 8000;

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.coding-buddy.club/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/www.coding-buddy.club/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/www.coding-buddy.club/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, './build')));


// Express Route
var userRoutes = require('./controllers/createUser')
app.use('/user', userRoutes)

// this is for let's encrypt validation
app.get('/.well-known/acme-challenge/TslOcOAfdJMF8HOSwCiELYNEEhLJ2M9ioTCkLGh0hyE', (req, res)=>{
  res.send('TslOcOAfdJMF8HOSwCiELYNEEhLJ2M9ioTCkLGh0hyE.rICMTVN4yTLm-VhDcVYG8SnlqQJ_Wy5l6CW2tienYRk')
})


app.get('/', (req, res)=> {
  res.send('Express server is up and running.');
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});


// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, (req, res) => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});

// app.listen(port, _=> console.log(`The server is listening on port ${port}`));
