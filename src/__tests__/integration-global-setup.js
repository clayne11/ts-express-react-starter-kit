const MongodbMemoryServer = require('mongodb-memory-server')

module.exports = async () => {
  global.__TEARDOWN__ = []

  const MONGO_DB_NAME = 'jest'
  const mongod = new MongodbMemoryServer.default({
    instance: {
      dbName: MONGO_DB_NAME,
    },
    binary: {
      version: '4.0.4',
    },
  })

  global.__TEARDOWN__.push(async () => {
    console.log('Teardown mongod')
    await mongod.stop()
  })
  process.env.MONGODB_URI = await mongod.getConnectionString()
}
