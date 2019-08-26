module.exports = app => {
    const productController = require('../controllers/products.controllers');
        app.get('/api/products', productController.showAll);
        app.get('/api/products/:id', productController.findProduct);
        app.post('/api/products', productController.newProduct);
        app.put('/api/products/:id', productController.updateProduct);
        app.delete('/api/products/:id', productController.removeProduct);
}
