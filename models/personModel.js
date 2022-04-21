const mongoose=require('mongoose') ;

const person = mongoose.Schema({
    name : {
        type : String , 
        require :true } ,

    age : Number ,
        
    favoriteFoods : [String] 
})
module.exports = mongoose.model('person',person) ;
