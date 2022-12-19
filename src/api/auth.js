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

export const registrationCheck = ({ data }) => {
  const userCredential = localStorage.getItem('webchat_user')
  if (userCredential) {
    const { cred } = JSON.parse(userCredential)
    return API({
      method: 'POST',
      path: `/${SAMPLE_APP_ID}/register/check`,
      data: {
        ...data,
        integrationId: SAMPLE_INTEGRATION_ID,
      },
      headers: {
        'X-LENNA-WEBCHAT': cred,
      },
    })
  }
  /**
   * Handle jika user credential tiba-tiba tidak ditemukan
   */
  return null
}
