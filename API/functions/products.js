const { create } = require('domain')
const prisma = require('../config/prisma')

module.exports = (app) => {
    const getAllById = async (req, res) => {
        const id = Number(req.params.id)

        const products = await prisma.product.findMany({where: {id_purchase:id}})
        
        res.send(products)
    }

    const createProduct = async (req, res) => {
        const product = {...req.body}
        setTimeout(()=> res.send('fim'), 5000)
        try{
            const affected = await prisma.product.create({
                data: {...product}
            })

            if(!affected) {
                res.send('Não foi possível salvar')
            } else {
                res.status(204)
            }
        } catch(e) {
            res.send('Não foi possível salvar: '+ e).status(500)
        }
    }


    return { getAllById, createProduct }
}