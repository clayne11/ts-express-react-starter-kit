import mongoose from 'mongoose'

export const testSchema = new mongoose.Schema({
  title: {type: String, required: true},
})

export const TestModel = mongoose.model('Test', testSchema)
