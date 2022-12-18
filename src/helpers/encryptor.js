import CryptoJS from 'crypto-js'
import { padEnd } from 'lodash'

const encrypt = (plainText, secretLey = 'k384y0r4nTRIANGLE') => {
  const INIT_VECTOR = '0000000000000000'
  const secretKey = padEnd(secretLey, 32, 0)
  const key = CryptoJS.enc.Utf8.parse(secretKey)
  const iv = CryptoJS.enc.Utf8.parse(INIT_VECTOR)
  const chiper = CryptoJS.AES.encrypt(plainText, key, {
    keySize: 256,
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  const output = chiper.ciphertext.toString(CryptoJS.enc.Base64)
  return output
}

export default encrypt
