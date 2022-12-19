import env from 'env'

const { URL_ORI } = env
const uploadUrl = `${URL_ORI}/upload/chat`

const messageType = (content) => ({
  text: '',
})

export default messageType
