const skin = {
    name:"",
    description:"" ,
    seeInfo: function (){
        return `${this.name} and ${this.description}`
    },
    toJSON : function() { 
        return {
         "name" : this.name,
         "description" : this.description,
         "value" : this.value
        }
    }
}
module.exports = skin
