const express = require('express');
const productdata = require('./src/model/ProductData');
const cors = require('cors');
var bodyparser = require('body-parser');

var app =new express();
app.use(cors({origin:"http://localhost:4200"}));
app.use(bodyparser.json());



app.get('/products',(req,res)=>{
    res.header('Access-control-Allow-Origin','*')
    res.header('Access-control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    productdata.find()
    .then(function(products){
        res.send(products);
    });
});

app.post('/insert',(req,res)=>{
    res.header('Access-control-Allow-Origin','*')
    res.header('Access-control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var product ={
        productId     : req.body.product.productId,
        productName   : req.body.product.productName,
        productCode   : req.body.product.productCode,
        releaseDate   : req.body.product.releaseDate,
        description   : req.body.product.description,
        price         : req.body.product.price,
        starRating    : req.body.product.starRating,
        imageUrl      : req.body.product.imageUrl
    }
    var product = new productdata(product)
    product.save((err,product)=>{
    if(!err){
        res.send(product);
    }else{
        console.log("error:"+err);
    }
    });
    
})

app.delete('/delete',(res,req)=>{
var _id=req.params._id
productdata.findByIdAndDelete(_id);
})

app.listen(3000,function(){
    console.log("listening to port:3000");
})