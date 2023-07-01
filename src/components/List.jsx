import Table from "./Table"
import s from './List.module.css'
import { useCallback, useEffect, useState, use } from "react"
// import fs from 'fs'
import axios, { Axios } from 'axios'
import {baseUrl} from '@/global'
import Form from "./Form"




export default function List() {
    let idPurchaseStoraged
    let maxSpendStoraged
    // useEffect(()=>{
    //     idPurchaseStoraged = Number(localStorage.getItem('idPurchaseStoraged'))
    //     maxSpendStoraged = Number(localStorage.getItem('maxSpendStoraged'))
    //     console.log(idPurchaseStoraged, maxSpendStoraged)
    // })


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



    // const [products, setProducts] = useState([
    //     {name: 'Coca-Cola', price: 10.25, added:false, units:2},
    //     {name: 'Soda', price: 5, added:false, units:6},
    //     {name: 'Coca-Cola', price: 10.25, added:false, units:2},
    //     {name: 'Soda', price: 5, added:false, units:6},
    //     {name: 'Coca-Cola', price: 10.25, added:false, units:2},
    //     {name: 'Soda', price: 5, added:false, units:6},
    //     {name: 'Coca-Cola', price: 10.25, added:false, units:2},
    //     {name: 'Soda', price: 5, added:false, units:6}
    // ])
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({name:'', price: 0, units: 0})
    const [showForm, setShowForm] = useState(false)
    const [idPurchase, setIdPurchase] = useState(idPurchaseStoraged?? 2)
    const [maxSpend, setMaxSpend] = useState('')

    useEffect(()=>{
        setIdPurchase(Number(localStorage.getItem('idPurchaseStoraged')))
        setMaxSpend(Number(localStorage.getItem('maxSpendStoraged')))
        console.log(idPurchaseStoraged, maxSpendStoraged)
    }, [])

    // setProducts([
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
    // ])
    const [loadAgain, setLoadAgain] = useState(0)
    try{
        useEffect(()=> {
            axios.get(`${baseUrl}/products/${idPurchase}`)
            .then(res => setProducts(res.data))
            .then(console.log('Carregado'))

        }, [loadAgain, idPurchase, showForm])
    } finally {


    const [balance, setBalance] = useState(0)
    let finalPrice = 0
    function updateFinalPrice() {
        products.forEach(p => {
            finalPrice = finalPrice+p.price
        })
    }

    // return useCallback(()=> {
    //     return (
        
    //     <div className="list-area">
    //         <h1 className={s.h1}>Lista</h1>
    //         <div className="list-actions">
    //             <div className={s.rs}>R$<input placeholder="Valor Máximo" type='number'
    //                 className={s.maxValue}
    //                 id={'maxSpend'}
    //                 value={maxSpend}
    //                 onChange={(e)=>setMaxSpend(e.target.value)}
    //             />  
    //             </div> <p></p>
    //             <button className={s.newItem}>Novo Item</button>
    //         </div>
    //         <Table products={products} balance={balance}
    //         maxSpend={maxSpend}
    //         onChange={finalPrice}
    //         ></Table>
            
    //     </div>
    // )}, [products])

    return (
        <div className="list-area">

            { showForm ? <Form product={selectedProduct} setShowForm={setShowForm}
                reload={setLoadAgain}
            /> : (
                <>
                        <h1 className={s.h1}>Lista</h1>
                        <div className="list-actions">
                            <div className={s.rs}>R$<input placeholder="Valor Máximo" type='number'
                                className={s.maxValue}
                                id={'maxSpend'}
                                value={maxSpend}
                                onChange={(e)=>{
                                    setMaxSpend(e.target.value)
                                    localStorage.setItem('maxSpendStoraged', Number(e.target.value))
                                }}
                            />  
                            </div> 

                            <input type='number' value={idPurchase} className={s.idPurchase} onChange={e=>{
                                setIdPurchase(e.target.value)
                                localStorage.setItem('idPurchaseStoraged', Number(e.target.value))
                            }}></input>

                            <button className={s.newItem} onClick={() => {
                                    setSelectedProduct({id:undefined, id_purchase: Number(idPurchase)})
                                    setShowForm(true)
                                
                            }}>Novo Item</button>
                        </div>
            
            <Table products={products} balance={balance}
                maxSpend={maxSpend}
                onChange={finalPrice}
                reload = {setLoadAgain} 
                setShowForm={setShowForm} 
                setSelectedProduct={setSelectedProduct}
                product={selectedProduct}/>
                </>)}
        </div>
    )
    }
}