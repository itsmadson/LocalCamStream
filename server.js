// server.js
const server = http.createServer(app);
const io = new Server(server);

// Allow connections from any IP address on your local network
const HOST = '192.168.1.5';
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Server is running.');
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('stream', ({ data }) => {
    io.emit('stream', { data });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
