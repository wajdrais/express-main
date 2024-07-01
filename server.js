const express = require ("express")
const path = require ("path")
const app = express ()
const port = 3556
const day= new Date().getDay()
const hour = new Date().getHours()
app.listen(port, ()=>{
    console.log("server is running !!!!")
})
const middelware=(req, res, next)=>{
if(day>=1 && day<=5 && hour>=9 && hour<=16){
next()
}
else{
    res.send("nous sommes temporairement fermé")
}
}
app.get("/", middelware, (req, res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "/public", "/Home.html"))

})
app.get("/Service", middelware, (req, res)=>{
    res.sendFile(path.join(__dirname, "/public", "/Services.html"))

})
app.get("/Contact", middelware, (req, res)=>{
    res.sendFile(path.join(__dirname, "/public", "/Contact.html"))

})

