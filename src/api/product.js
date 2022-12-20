import API from 'utils/api'
import Hashids from 'hashids'
import moment from 'moment'
import env from '../env'

const {
  SAMPLE_INTEGRATION_ID, SAMPLE_APP_ID,
} = env

const hashids = new Hashids('', 6)

export const chatEvent = (data) => {
  const userCredential = localStorage.getItem('webchat_user')
  if (userCredential) {
    const { cred, id } = JSON.parse(userCredential)
    const decodedUserId = hashids.decode(id)[0]
    return API({
      method: 'POST',
      path: `/${SAMPLE_APP_ID}/webhook/webchat`,
      data: {
        ...data,
        integrationId: SAMPLE_INTEGRATION_ID,
        senderId: id,
        message: {
          ...data?.message,
          created_at: null,
          messageable_id: decodedUserId,
          temporary_id: moment().format('x'),
          id: moment().format('x'),
        },
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

export const a = {}
