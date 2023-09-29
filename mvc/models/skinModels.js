const Db = require("../../repository/database.js")

class Skin{
    categoria
    nome
    descricao
    genero
    valor
    raridade
    foto1
    foto2

    constructor(nome, descricao, raridade){
        this.nome = nome 
        this.descricao = descricao
        this.raridade = raridade
    }

    getAllSkins(){
        const db = new Db()

        db.getConnection().query("SELECT * FROM SKINS", (err, results, fields) =>{
            console.log(results)
        })
    }
}

// const skinx=new Skin

// Skin.categoria
// Skin.nome
// Skin.descricao
// Skin.genero
// Skin.valor
// Skin.raridade
// Skin.foto1
// Skin.foto2

module.exports = Skin
