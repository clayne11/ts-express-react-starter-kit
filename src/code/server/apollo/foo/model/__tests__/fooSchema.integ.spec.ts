import {FooModel} from 'code/server/apollo/foo/model/fooSchema'

describe('fooSchema', () => {
  it('should create a foo', async () => {
    const title = 'My title'
    const foo = await FooModel.create({
      title,
    })
    expect(foo.title).toBe(title)
  })
})
