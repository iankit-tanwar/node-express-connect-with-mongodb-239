
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config()

let PORT = process.env.PORT||5000

async function main(){
     await mongoose.connect('mongodb+srv://ankit_server:Hyperlink123321@cluster0.6sujrau.mongodb.net/?retryWrites=true&w=majority');
}

main().then((d)=>{console.log('you are connected to mongodb Database')}).catch(err=>console.log(err))

app.listen(PORT,()=>{
 console.log(`this server is working Port ${PORT}`)
})