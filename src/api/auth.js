import API from 'utils/api'
import env from '../env'

const {
  API_URL,
} = env
console.log(API_URL)
export const registration = () => API({
  method: 'POST',
  path: '/token',
})

export const a = () => {}
