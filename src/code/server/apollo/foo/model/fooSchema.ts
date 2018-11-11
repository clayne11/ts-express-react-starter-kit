import {prefixCollection} from 'code/server/utils/prefixCollection'
import mongoose, {Document} from 'mongoose'

export const fooSchema = new mongoose.Schema({
  title: {type: String, required: true},
})

interface FooDocument extends Document {
  title: string
}

export const FooModel = mongoose.model<FooDocument>(
  prefixCollection('Foo'),
  fooSchema
)
