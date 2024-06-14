//  const mongoose=require('mongoose');

//  const mongoURL="mongodb://0.0.0.0:27017/?directConnection=true";

//  const connectTomongo=()=>{
//     mongoose.connect(mongoURL,()=>{
//         console.log('connect to mongoose successfully')
//     })
//  }
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

// connectDB();

 module.exports=connectDB;