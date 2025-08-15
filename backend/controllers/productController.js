let products = [
    { id: 1, name: 'telur', price: 3000 },
    { id: 2, name: 'mie sedap', price: 4000 },
    //{ id: 3, name: 'Product 3', price: 300 }
]

exports.getAllProducts = (req, res) => {
    res.json(products);
};
