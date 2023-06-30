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
        console.log(product)
        try{
            const affected = await prisma.product.create({
                data: {
                    name: product.name,
                    price: Number(product.price),
                    units: Number(product.units),
                    id_purchase: Number(product.id_purchase),
                    added: false
                }
            })

            console.log(affected)

            if(!affected) {
                res.send('Não foi possível salvar')
            } else {
                res.status(204)
            }
        } catch(e) {
            console.log('erro: '+e)
            res.send('Não foi possível salvar: '+ e).status(500)
        }
    }

    const updateProduct = async (req, res) => {//primeira vez foi direto!!!!!!!
        const product = {...req.body}
        console.log(product)
        try{
            await prisma.product.update({
                where: {id_purchase: product.id_purchase},
                where: {id: product.id},
                data: {name: product.name,
                price: product.price,
                units: Number(product.units),
                added: product.added
            }
            })
        } catch(e) {
            return res.status(500)
        }
    }

    const remove = async (req, res) => {
        const product = {...req.body}
        const id_purchase = product.id_purchase
        const id = product.id
        // const id_purchase = Number(req.body.id_purchase)
        // const id = Number(req.body.id)

        await prisma.product.delete({
            where: {
                id: Number(id)
            },
            where: {
                id_purchase: id_purchase
            }
            
        })
    }


    return { getAllById, createProduct, updateProduct, remove }
}