import http from 'node:http'
import { findAvalaiblePort } from './util.js'
import { handleGetRequest, handlePostRequest, handlePutRequest, handleDeleteRequest, notFound } from './route.js'
const desiredPort = process.env.PORT ?? 3000

const proccesRequest = (req, res) => {
  const { method, url: urlreq } = req
  const url = new URL(urlreq, `http://${req.headers.host}`)

  switch (method) {
    case 'GET': handleGetRequest(url, res); break
    case 'POST': handlePostRequest(url, req, res); break
    case 'PUT': handlePutRequest(url, req, res); break
    case 'DELETE': handleDeleteRequest(url, req, res); break
    default: notFound(res)
  }
}
const server = http.createServer(proccesRequest)

findAvalaiblePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server Running in http://localhost:${port}`)
  })
})
