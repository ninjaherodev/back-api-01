import { parseRequestBody } from './util.js'

const POKEMON_ROUTE = '/pokemon'
const pokemon = []
const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  NO_CONTENT: 204
}

const sendResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf8' })
  res.end(JSON.stringify(data))
}

export const notFound = (res) => {
  sendResponse(res, HTTP_STATUS_CODE.NOT_FOUND, { message: 'Ruta no encontrada' })
}

export const handleGetRequest = (url, res) => {
  switch (url.pathname) {
    case POKEMON_ROUTE: {
      sendResponse(res, HTTP_STATUS_CODE.OK, pokemon)
      break
    }
    default:
      sendResponse(res, HTTP_STATUS_CODE.NOT_FOUND, { message: 'Ruta no encontrada' })
  }
}

export const handlePostRequest = async (url, req, res) => {
  if (url.pathname !== POKEMON_ROUTE) {
    sendResponse(res, HTTP_STATUS_CODE.NOT_FOUND, { message: 'Ruta no encontrada' })
    return
  }
  try {
    const data = await parseRequestBody(req)
    pokemon.push(data)
    sendResponse(res, HTTP_STATUS_CODE.CREATED, data)
  } catch (error) {
    sendResponse(res, HTTP_STATUS_CODE.BAD_REQUEST, { message: 'Error al analizar el cuerpo de la solicitud' })
  }
}

export const handlePutRequest = async (url, req, res) => {
  if (url.pathname !== POKEMON_ROUTE) {
    sendResponse(res, HTTP_STATUS_CODE.NOT_FOUND, { message: 'Ruta no encontrada' })
    return
  }
  try {
    const data = await parseRequestBody(req)
    const pokemonId = url.searchParams.get('id')
    const index = pokemon.findIndex(item => item.id === Number(pokemonId))
    if (index !== -1) {
      pokemon[index] = data
      sendResponse(res, HTTP_STATUS_CODE.OK, pokemon[index])
    } else {
      sendResponse(res, HTTP_STATUS_CODE.NOT_FOUND, { message: 'Pokémon no encontrado' })
    }
  } catch (error) {
    sendResponse(res, HTTP_STATUS_CODE.BAD_REQUEST, { message: 'Error al analizar el cuerpo de la solicitud' })
  }
}

export const handleDeleteRequest = async (url, req, res) => {
  if (url.pathname !== POKEMON_ROUTE) {
    sendResponse(res, HTTP_STATUS_CODE.NOT_FOUND, { message: 'Ruta no encontrada' })
    return
  }
  try {
    const pokemonId = url.searchParams.get('id')
    const index = pokemon.findIndex(item => item.id === Number(pokemonId))
    if (index !== -1) {
      pokemon.splice(index, 1)
      sendResponse(res, HTTP_STATUS_CODE.NO_CONTENT, null)
    } else {
      sendResponse(res, HTTP_STATUS_CODE.NOT_FOUND, { message: 'Pokémon no encontrado' })
    }
  } catch (error) {
    sendResponse(res, HTTP_STATUS_CODE.BAD_REQUEST, { message: 'Error al analizar el cuerpo de la solicitud' })
  }
}
