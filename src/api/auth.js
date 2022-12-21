import API from 'utils/api'

export const registration = () => API({
  method: 'POST',
  path: '/token',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})

export const a = () => {}
