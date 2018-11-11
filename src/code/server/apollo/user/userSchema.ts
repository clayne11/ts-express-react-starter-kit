import {prefixCollection} from 'code/server/utils/prefixCollection'
import mongoose, {Document} from 'mongoose'
import bcrypt from 'bcrypt'

const PASSWORD_SALT = process.env.PASSWORD_SALT!

export const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
})

userSchema.methods.isValidPassword = async function(password: string) {
  const encryptedPassword = await bcrypt.hash(password, PASSWORD_SALT)
  return this.password === encryptedPassword
}

export interface UserDocument extends Document {
  email: string
  password: string
  isValidPassword: (password: string) => boolean
}

export const User = mongoose.model<UserDocument>(
  prefixCollection('User'),
  userSchema
)
