import mongoose from 'mongoose'

export const fooSchema = new mongoose.Schema({
  title: {type: String, required: true},
})

export const FooModel = mongoose.model('Foo', fooSchema)
