const mongoose =  require('mongoose');

mongoose.connect("mongodb://localhost:27017/Productdb",(err)=>{
    if(!err){
        console.log("mongodb connection succeeded")
    }else{
        console.log("error:"+err)
    }
})
const Schema = mongoose.Schema

var NewProductSchema = new Schema({
    productId   : Number,
    productName : String,
    productCode : String,
    releaseDate : String,
    description : String,
    price       : Number,
    starRating  : Number,
    imageUrl    : String
});

var Productdata = mongoose.model('products',NewProductSchema);
module.exports=Productdata;