
const Skin = require("../models/skinModels.js")
const skinModel = require('../models/skinsModel.js')
const  path = require("path")

module.exports = (app) => {
app.get("/getSkin", (req, res) => {
    const skin = new Skin ("Chapeu Eldorado" , "Sei lá", 10)

    skin.getAllSkins()
    
    res.send("Nome:" + skin.nome)
})




app.get("/getSkins", (req, res) => {
    const skin = skinModel

    skin.name = "moto"
    skin.description = "xj6 branca"
    skin.value = "R$ 43.051,00"
    

    res.json(skin.toJSON())
})

app.get("/N", (req, res) => {
    res.sendFile(path.resolve('mvc/views/skinsView.html'))
})

}
