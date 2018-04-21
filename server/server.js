const express = require('express');
const app = express();
const server = require('http').Server(app); //eslint-disable-line

app.use(express.static('public'));

server.listen(4000, () => {
  console.log('Our server is running on http://localhost:' + 4000);
});
