const mongoose = require('mongoose')
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB conectado com sucesso!')
    }catch(erros){
        console.error('erro ao conectar ao mongoDB!')
    }
}