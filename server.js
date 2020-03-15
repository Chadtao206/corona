const express = require("express");
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))
}else{
    app.use(express.static('client/public'))
}

app.listen(PORT, ()=> console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`))