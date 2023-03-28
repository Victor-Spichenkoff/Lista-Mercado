import Table from "./Table"
import s from './List.module.css'
import { useState } from "react"

export default function List() {
    const products = [
        {name: 'Coca-Cola', price: 10.25, added:true, units:2},
        {name: 'Soda', price: 5, added:false, units:6},
        {name: 'Coca-Cola', price: 10.25, added:true, units:2},
        {name: 'Soda', price: 5, added:false, units:6},
        {name: 'Coca-Cola', price: 10.25, added:true, units:2},
        {name: 'Soda', price: 5, added:false, units:6},
        {name: 'Coca-Cola', price: 10.25, added:true, units:2},
        {name: 'Soda', price: 5, added:false, units:6}
    ]

    

    const [maxSpend, setMaxSpend] = useState('')
    const [balance, setBalance] = useState(0)
    let finalPrice = 0
    function updateFinalPrice() {
        products.forEach(p => {
            finalPrice = finalPrice+p.price
    
        })
    }


    function getBalance() {
        
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