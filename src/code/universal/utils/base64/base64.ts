import {Buffer} from 'buffer'

export const encode = (str: string): string => {
  if (!str) {
    return ''
  }
  return new Buffer(str).toString('base64')
}

export const decode = (str: string): string => {
  if (!str) {
    return ''
  }
  return new Buffer(str, 'base64').toString('ascii')
}
