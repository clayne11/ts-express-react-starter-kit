import {app} from './app'
import {startupChecker} from './utils/startupChecker'

app.get('/ping', async (_req, res) => {
  try {
    await startupChecker()
    res.end()
  } catch (error) {
    res.status(500).end()
  }
})
