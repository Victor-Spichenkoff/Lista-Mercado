module.exports = app => {
    app.delete('/products/delete/:id', app.functions.products.deletar)
    
    app.put('/products/updateOne', app.functions.products.updateProduct)
    
    app.post('/products', app.functions.products.createProduct)

    app.get('/products/:id', app.functions.products.getAllById)


    app.use((req, res)=>{
        res.status(500).send('Serviço não encontrado')
    })
}