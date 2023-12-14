const mongoose =  require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

//  users is the table of database

const ProductsSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    products: [ProductSchema], // Define an array field for products
    
    
});

const ProductsModel = mongoose.model("products", ProductsSchema)
module.exports = ProductsModel;