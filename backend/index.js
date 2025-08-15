const express = require('express');
const cors = require('cors');
require('dotenv').config();
const ProductRoutes = require('./routes/product');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests
app.use('/products', ProductRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
