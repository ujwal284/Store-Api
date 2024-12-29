require('dotenv').config()
// async errors


const express = require('express');
const app = express();

const connectDB = require('./db/index.db.js')

const productRouter = require('./Routes/products.route.js')


const errorMiddleware = require('./Middleware/error-handler.middleware');
const notFoundMiddleware = require('./Middleware/not-found.middleware');



// middleware
app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/>v1/products"> products route</a>')
})

app.use('/api/v1/products', productRouter)



// products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.port || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log(`\n MongoDB connected !!`);
        app.listen(port, console.log(`⚙️  Server is running at port ${port}`))
    } catch (error) {
        console.log(error);

    }
}

start()