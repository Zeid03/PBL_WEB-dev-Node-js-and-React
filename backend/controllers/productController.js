let products = [
    { id: 1, name: 'telur', price: 3000 },
    { id: 2, name: 'mie sedap', price: 4000 },
    //{ id: 3, name: 'Product 3', price: 300 }
]

exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
};

exports.getProductById = (req, res) => {    
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({ message: 'Product not found' }); 
    res.status(200).json(product);
}   

exports.createProduct = (req, res) => {
    const { name, price } = req.body;
    if (!name || typeof price !== 'number') {
        return res.status(400).json({ message: 'Invalid product data' });
    }   

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
}

exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id); // ganti 'products' jadi 'product' biar tidak menimpa variabel global
    
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const { name, price } = req.body;

    if (!name || typeof price !== 'number') {
        return res.status(400).json({ message: 'Invalid product data' });
    }

    product.name = name;
    product.price = price;

    res.status(200).json(product);
};

exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const Index = products.findIndex(p => p.id === id);
    
    if (Index === -1) return res.status(404).json({ message: 'Product not found' });
    

    products.splice(Index, 1);
    res.status(204).send(); // No content to send back
}