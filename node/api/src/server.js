import http from 'http';

const server = http.createServer((req, res) => {
  console.log('Servidor Rodando...');
  return res.end('Hello Word');
});

server.listen(3333);
