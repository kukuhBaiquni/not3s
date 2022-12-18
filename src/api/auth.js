import API from 'utils/api'
import env from '../env'

const {
  SAMPLE_INTEGRATION_ID, SAMPLE_APP_ID,
} = env

export const registration = ({ data }) => API({
  method: 'POST',
  path: `/${SAMPLE_APP_ID}/register/webchat`,
  data,
})

export const a = {}
