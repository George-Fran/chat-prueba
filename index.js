const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});


io.on('connection', function(socket) {
  console.log('Alguien se conecto');
  socket.on('chat message', function(mensaje) {
      console.log('recibi: ' + mensaje);
      io.emit('recibido', {
          date: new Date(),
          txt: mensaje
      });
  });
});


app.use(express.static('public'));


http.listen(port, function() {
  console.log('Listen on http://localhost:' + port);
});
