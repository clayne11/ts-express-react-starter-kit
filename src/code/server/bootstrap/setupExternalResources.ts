import mongoose from 'mongoose'

export const setupExternalResources = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI!,
    {
      useNewUrlParser: true,
    }
  )
}
