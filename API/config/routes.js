module.exports = app => {
    app.get('/products/:id', app.functions.products.getAllById)

    app.post('/products', app.functions.products.createProduct)

    app.delete('/products', app.functions.products.remove)

    app.put('/products/updateOne', app.functions.products.updateProduct)

    app.use((req, res)=>{
        res.status(500).send('Serviço não encontrado')
    })
    
}