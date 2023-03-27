import Table from "./Table"
import s from './List.module.css'

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


    return (
        <div className="list-area">
            <h1 className={s.h1}>Lista</h1>
            <div className="list-actions">
                <div className={s.rs}>R$<input placeholder="Quanto quer gastar?" type='number'></input></div> <p></p>
                <button>Adicionar item</button>
            </div>
            <Table products={products}></Table>
            
        </div>
    )
}