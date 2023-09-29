const item = {
    name:"",
    description:"" ,
    seeInfo: function (){
        return `${this.name} and ${this.description}`
    },
    toJSON : function() { 
        return {
         "name" : this.name,
         "drecription" : this.description
        }
    }
}
module.exports = item