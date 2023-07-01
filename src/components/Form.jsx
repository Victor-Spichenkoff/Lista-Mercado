// interface {
// product
// setProduct
// }

import { useEffect, useState } from "react"
import s from './Form.module.css'
import axios from "axios"
import { baseUrl } from "@/global"


export default function Form(props) {

    const id_purchase = props.product.id_purchase ?? 2
    const id = props.product.id = props.product.id ?? undefined

    // useEffect(()=> {
    //     id_purchase = props.product.id_purchase ?? 2
    //     id = props.product.id = props.product.id ?? undefined
    // }, [])
    const [product, setProduct] = useState(props.product?? {})//{name:'', price: 0, units: 0})

    function save() {
        setProduct({name: product.name??'Não Informado', price: product.price??1 ,units: product.units??1, id_purchase: id_purchase, id})//remonta ele
        const productFormated = {
            name: product.name,
            price: Number(product.price),
            units: parseInt(product.units),
            id: Number(product.id),
            id_purchase: Number(product.id_purchase),
        }
        if(id) {//editar
            console.log(product)
            axios.put(`${baseUrl}/products/updateOne`, productFormated)
                .then(()=>console.log('Atualizado'))
        } else { 
            axios.post(`${baseUrl}/products`, productFormated)
        }
        setTimeout(()=> {
            props.reload(Math.random()*Math.random())
            props.setShowForm(false)
        }, 70)
        setTimeout(()=> {
            props.reload(Math.random()*Math.random())
        }, 1000)
        setTimeout(()=> {
            props.reload(Math.random()*Math.random())
        }, 2000)
    }

    window.onkeydown = (e) => {
        const key = e.key

        if(key == 'Enter') {
            save()
        }
    }

    return (
    <>
        <h1 className={s.h1}>{id ? 'Editar' : 'Adicionar'}</h1>
        <form action="">
            <div className={s.group}>
                <label htmlFor="">Nome</label> <br /> 
                <input type="text" value={product.name} onChange={e=>setProduct({name: e.target.value, price: product.price, units: product.units, id_purchase, id})}/>
            </div>
            <div className={s.group}>
                <label htmlFor="">Preço</label> <br /> 
                <input type="number" value={product.price} onChange={e=>setProduct({name: product.name, price: product.price, price: e.target.value, units: product.units, id_purchase, id})}/>
            </div>
            <div className={s.group}>
                <label htmlFor="">Unidades</label> <br />
                <input type="number" value={product.units} onChange={e=>setProduct({name: product.name, price: product.price, units: e.target.value, id_purchase, id})}/>
            </div>

        </form>
        <div className={s.buttons}>
            <button  className={s.cancel} onClick={()=>props.setShowForm(false)}>Cancelar</button>
            <button  className={s.save} onClick={save}>Salvar</button>
        </div>

    </>
    )
}