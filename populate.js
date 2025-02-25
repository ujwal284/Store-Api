require('dotenv').config()

const connectDB = require('./db/index.db');
const Product = require('./Models/product.model.js');

const jsonProducts = require('./products.json')



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany();
        await Product.create(jsonProducts)
        console.log('Success!!!')
        process.exit(0)

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()