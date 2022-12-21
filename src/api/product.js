import API from 'utils/api'
import env from '../env'

const {
  OUTLET_ID,
} = env

export const getProducts = () => {
  const token = localStorage.getItem('access_token')
  return API({
    method: 'POST',
    path: '/products',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    data: {
      outlet_id: OUTLET_ID,
      token,
      is_sellable: true,
    },
  })
}

export const getOutlets = () => {
  const token = localStorage.getItem('access_token')
  return API({
    method: 'POST',
    path: '/outlets',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    data: {
      token,
    },
  })
}

export const a = {}
