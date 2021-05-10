// 
const http = require('http')

// setting up the hostname and the port number
const hostname = '127.0.0.1'
const port = 3000

// creating your server, with status and a respond.
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('step 1 with NodeJS \n Hello World!\n ')
})

// now displaying the server created
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})