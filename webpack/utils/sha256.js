import crypto from 'crypto'

export default inputString =>
  crypto
    .createHash('sha256')
    .update(inputString)
    .digest('hex')
