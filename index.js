const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

io.on('connection', (socket) => {
  console.log('Alguien se conecto');
  socket.on('chat message', (mensaje) => {
    console.log('recibi: ' + mensaje);
    io.emit('recibido', {
      date: new Date(),
      txt: mensaje
    });
  });
});

app.use(express.static('public'));

server.listen(port, () => {
  console.log('Listen on http://localhost:' + port);
});
