const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true }))
const Mydata = require("./models/myschema")
app.set("view engine", "ejs")
app.use(express.static("public"))

//auto refrech
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


app.get('/', (req,res) =>{
    Mydata.find().then((result) =>{
        res.render("home",{arr: result})
    }).catch((error) =>{
        console.log(error)
    })
})

mongoose.connect("mongodb://awebsolo23_db_user:zOWM9B8u4c9GQGOP@ac-amenl6c-shard-00-00.76o1uhu.mongodb.net:27017,ac-amenl6c-shard-00-01.76o1uhu.mongodb.net:27017,ac-amenl6c-shard-00-02.76o1uhu.mongodb.net:27017/all-data?ssl=true&replicaSet=atlas-h1r9j2-shard-0&authSource=admin&appName=Cluster0")
.then( () => {
    app.listen(port, () =>{
    console.log(`http://localhost:${port}/`)
})
})
.catch( (err) => {console.log(err)});

app.post('/', (req,res) =>{
   console.log(req.body)
   const mydata = new Mydata(req.body)
   mydata.save().then(() =>{
        res.redirect("/")
   }).catch((error) => {
    console.log(error)
   })


})