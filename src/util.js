import net from 'net'

export const findAvalaiblePort = (desiredPort) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvalaiblePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

export const parseRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', chunk => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        const parsedBody = JSON.parse(body)
        resolve(parsedBody)
      } catch (error) {
        reject(error)
      }
    })
  })
}
