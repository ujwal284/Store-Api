const Product = require('../Models/product.model.js')

const getAllProductsStatic = async (req, res) => {
    const product = await Product.find({
        featured: true,
    })
    res.status(200).json({ product, nbHits: product.length })
}

const getAllProducts = async (req, res) => {


    res.status(200).json({ msg: 'products route' })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}