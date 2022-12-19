import axios from 'axios'
import env from '../env'

const {
  API_URL, API_URL_ORI, SAMPLE_INTEGRATION_ID, SAMPLE_APP_ID,
} = env

const API = async (props) => {
  const {
    path, method = 'GET', params = {}, data, headers,
  } = props
  const timeout = 15E3
  const config = {
    timeout,
    baseURL: API_URL_ORI,
    url: path,
    method,
    params: {
      ...params,
    },
    data,
    headers: {
      ...headers,
    },
  }
  const response = await axios(config)
  return response.data.data
}

export default API
