const Product = require('../models/products.model');

exports.showAll = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

exports.newProduct = (req, res) => {
    const product = new Product(req.body);
    product.save()
        .then(product => res.json(product))
        .catch(err => {
            console.log(err)
            return res.status(500).json(err)
        })
}

exports.findProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.body._id}, req.body, {new: true})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

exports.removeProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}