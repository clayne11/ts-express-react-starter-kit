import bodyParser from 'body-parser'
import flash from 'connect-flash'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import {createServer} from 'http'

export const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(session({secret: process.env.SESSION_SECRET!}))
app.use(cors({credentials: true}))
app.use(flash())

export const httpServer = createServer(app)
