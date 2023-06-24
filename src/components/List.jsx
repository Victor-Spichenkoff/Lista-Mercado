import Table from "./Table"
import s from './List.module.css'
import { useCallback, useEffect, useState } from "react"
// import fs from 'fs'
import axios, { Axios } from 'axios'

export default function List() {
    // let products
    // fetch('http://localhost:3001/').then((res)=>{
    //     products = JSON.parse(res.data)
    // })
    // const products = [
    //     {name: 'Coca-Cola', price: 10.25, added:false, units:2},
    //     {name: 'Soda', price: 5, added:false, units:6},
    //     {name: 'Coca-Cola', price: 10.25, added:false, units:2},
    //     {name: 'Soda', price: 5, added:false, units:6},
    //     {name: 'Coca-Cola', price: 10.25, added:false, units:2},
    //     {name: 'Soda', price: 5, added:false, units:6},
    //     {name: 'Coca-Cola', price: 10.25, added:false, units:2},
    //     {name: 'Soda', price: 5, added:false, units:6}
    // ]
    // const products = [
    //     {
    //         "id": 1,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 2,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 3,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 4,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 5,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 6,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 7,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 8,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 9,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     },
    //     {
    //         "id": 10,
    //         "name": "Batata",
    //         "id_purchase": 1,
    //         "units": 2,
    //         "price": 20,
    //         "added": false
    //     }
    // ]

    const [products, setProducts] = useState([])
    useCallback(()=>{
         axios.get('http://localhost:2006/products/1')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    }, [])
    

    const [maxSpend, setMaxSpend] = useState('')
    const [balance, setBalance] = useState(0)
    let finalPrice = 0
    function updateFinalPrice() {
        products.forEach(p => {
            finalPrice = finalPrice+p.price
        })
    }


    return (
        <div className="list-area">
            <h1 className={s.h1}>Lista</h1>
            <div className="list-actions">
                <div className={s.rs}>R$<input placeholder="Valor Máximo" type='number'
                    className={s.maxValue}
                    id={'maxSpend'}
                    value={maxSpend}
                    onChange={(e)=>setMaxSpend(e.target.value)}
                />  
                </div> <p></p>
                <button className={s.newItem}>Novo Item</button>
            </div>
            <Table products={products} balance={balance}
            maxSpend={maxSpend}
            onChange={finalPrice}
            ></Table>
            
        </div>
    )
}