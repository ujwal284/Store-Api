const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product must be provided']
    },
    price: {
        type: Number,
        required: [true, 'Product must be provided']

    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['newmew', 'nike', 'adibas', 'honda'],
            message: '{VALUE} is not supported'
        }
        // enum: ['newmew', 'nike', 'adibas', 'honda']
    },
})

module.exports = mongoose.model('Product', productSchema)