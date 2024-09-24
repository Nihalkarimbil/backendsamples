// var http = require('http');
// const { error } = require('console');
// let fs = require('fs');

// http.createServer(function (request, response) {
//     // Set the correct content type
//     response.writeHead(200, { 'Content-Type': 'text/html' });

//     // Append to the file
//     fs.appendFile('new.txt', 'addedeeekh', (error) => {
//         if (error) {
//             console.log(error);
//             response.end('<h2>Error writing to file</h2>');
//         } else {
//             // Send the response after the file is written
//             response.end('<h2>Hello World</h2>');
//         }
//     });

// }).listen(3001, () => {
//     console.log('Server is listening on port 3001');
// });

// const express=require('express')
// const app =express()
// const PORT=4000;

// app.get('/users',(req,res)=>{
//     res.send({data:'here is your data'})
// });

// app.post('/users',(req,res)=>{
//     res.send({data:'user created'})
// })

// app.put('/users',(req,res)=>{
//     res.send({data:'user updated'})
// })

// app.delete('/users',(req,res)=>{
//     res.send({data:'user deleted'})
// })

// app.listen(PORT,()=>`app listening on ${PORT}`)

// const express = require('express')
// const app = express()
// const TOKEN=require('./middlware/token')
// const validation=require('./middlware/validation')
// const midddleware=[TOKEN,validation]

// app.use(dategenerater)

// app.get('/profile', midddleware, (req, res) => {
//     console.log('user logged');
//     res.send('<h1>success</h1>')
// })
// app.get('/',(req,res)=>{
//     console.log('home');
//     res.send('<h1>home</h1>')
// })

// function dategenerater(req,res,next){
//     console.log(new Date())
//     next()
// }
// app.listen(4000) 

const express=require ('express')
const app=express()
const multer =require('multer')
const path=require('path')


const storage=multer.diskStorage({
    destination:(req,res,cB)=>{
        cB(null,'images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const updaload=multer({storage:storage})

app.set('view engine','ejs')

app.get('/upload',(req,res)=>{
    res.render('upload')
})

app.post('/upload',updaload.single('image'),(req,res)=>{
    res.send('image uploaded')
})

app.listen(3004)
console.log('3004 is the port');

