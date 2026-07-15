const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.get('/', (req,res) =>{
    res.sendFile("./Views/Home.html", {root: __dirname})
})

mongoose.connect("mongodb://awebsolo23_db_user:zOWM9B8u4c9GQGOP@ac-amenl6c-shard-00-00.76o1uhu.mongodb.net:27017,ac-amenl6c-shard-00-01.76o1uhu.mongodb.net:27017,ac-amenl6c-shard-00-02.76o1uhu.mongodb.net:27017/?ssl=true&replicaSet=atlas-h1r9j2-shard-0&authSource=admin&appName=Cluster0")
.then( () => {
    app.listen(port, () =>{
    console.log(`http://localhost:${port}/`)
})
})
.catch( (err) => {console.log(err)});
