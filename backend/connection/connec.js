const mongoose=require('mongoose');
mongoose.set('strictQuery',false)

async function getConnection(){
    await mongoose.connect('mongodb+srv://navyatelugu:Cherry@05@cluster0.9lvg6fi.mongodb.net/?retryWrites=true&w=majority');
}

module.exports=getConnection;