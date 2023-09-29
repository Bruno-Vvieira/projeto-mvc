
const itemModel = require('../models/itemsModel.js')
const  path = require("path")
module.exports = (app) => {


app.get("/getItem", (req, res) => {
    const item = itemModel

    item.name = "Car"
    item.description = "Blue Porsche"
    

    res.json(item.toJSON())
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve('mvc/views/itemsView.html'))
})

}