import {createApolloServer} from '../apollo/createApolloServer'
import {startupSubject} from '../utils/startupSubject'
import {runHttpServer} from './runHttpServer'
import mongoose from 'mongoose'

export const startup = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI!,
    {
      useNewUrlParser: true,
    }
  )
  await createApolloServer()
  await runHttpServer()

  require('code/server/webpack')

  startupSubject.next(true)
}
