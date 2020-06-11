const mongoose = require('mongoose')
const confiq = require('config')
const db = confiq.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false }
      
    )

    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB