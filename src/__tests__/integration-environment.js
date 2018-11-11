const range = require('lodash/range')
const random = require('lodash/random')
const sample = require('lodash/sample')
const NodeEnvironment = require('jest-environment-node')

const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'

const choice = arrayOrString => sample([...arrayOrString])

const randomString = (charsCount, alphabet = LOWERCASE_LETTERS) =>
  range(charsCount)
    .map(_ => choice(alphabet))
    .join('')

const id = (charsCount = 17) => randomString(charsCount, LOWERCASE_LETTERS)

class IntegrationEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
  }

  async setup() {
    const COLLECTION_PREFIX = `${id()}_`
    this.global.COLLECTION_PREFIX = COLLECTION_PREFIX
    this.global.PORT = random(3010, 9000)
    this.global.ROOT_URL = `http://localhost:${this.global.PORT}`

    await super.setup()
  }

  async teardown() {
    await super.teardown()
  }

  runScript(script) {
    return super.runScript(script)
  }
}

module.exports = IntegrationEnvironment
