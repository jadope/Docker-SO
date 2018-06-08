const http = require('http')  
const uuid = require("node-uuid");
const port = process.env.SPECIAL_PORT || 4321 

const requestHandler = (request, response) => {  
  const message = `¡Hola! Estamos generando un uuid con base en un número aleatorio y a ti te tocó el: ${uuid.v4()}, si no te gusta podrías recargar la página para obtener otro.`;
  response.end(message);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('ERROR:', err)
  }

  console.log(`*-*-*-*\n\nServidor activo en el puerto ${port}\n\n*-*-*-*`);
});
