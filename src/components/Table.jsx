import { useEffect, useState, useCallback, useContext } from 'react'
import style from './Table.module.css'
import { DeleteIcon } from './Icons'
import { EditIcon } from './Icons'
import Resume from './Resume'
import ProductRow from './productRow'
import axios from 'axios'
import {baseUrl, productsKey} from '@/global'



export default function Table(props) {


    //passar: array com todos os produtos;  mudar o showForm


    function createHead() {
        return (
            <thead className={style.head}>
                <td className={style.first}>Carrinho</td>
                <td>Nome</td>
                <td>Unidades</td>
                <td>Preço Final</td>
                <td className={style.last}>Ações</td>
            </thead>
        )
    }


    function createActions(product) {

        return (
            <>
            <button className={style.edit}
                onClick={() => {
                    props.setSelectedProduct(product)
                    props.setShowForm(true)
                }}
            >
                {EditIcon}
            </button>

            <button className={style.delete}
            
                onClick={(e)=> {
                    // props.setSelectedProduct(product)
                    axios.delete(`${baseUrl}/products/delete/${product.id}`)
                    console.log(product)
                    props.reload(Math.random()*Math.random())
                    setTimeout(()=> props.reload(Math.random()*Math.random()), 1000)
                }}
            >
                {DeleteIcon}
            </button>
            </>)
    }


    const [endPrice, setFinalPrice] = useState(0)
    const [finalUnits, setFinalUnits] = useState(0)


    async function calculateFinalPrice(changeState=true) {
        let finalPrice = 0
        props.products.forEach((product, i) => {
            if(product.added) {
                    finalPrice+=product.price*product.units
            }
        })
        if(changeState){
            setFinalPrice(finalPrice)
        }
        return finalPrice
    }


    // let endPrice = 0
    // let endUnits= 0

    function createRows() {
        useEffect(()=> {calculateFinalPrice()})



        return props.products.map((product,i) => {
            let finalPrice = (product.price * product.units).toFixed(2).replace('.', ',')

            // const [added, setAdded] = useState(product.added)
            let added = product.added
            
            


            function toggleAdded() {
                added ? product.added=false : product.added=true
                added ? added = false : added = true

                axios.put(`${baseUrl}/products/updateOne`, product)
                // added ? setAdded(false) : setAdded(true)
            }

            return (
                <tr /*key={product.added}*/ className={style.tr}>
                    <td>
                        <input type="checkbox" checked={added} 
                            onClick={() => toggleAdded()}
                            className={style.chekbox}
                        />
                        </td>
                    <td>{product.name}</td>
                    <td>{product.units}</td>
                    <td>{finalPrice}</td>
                    <td>{createActions(product)}</td>
                </tr>
            )
        })//som se receber os clientes
    }

    const [balance, setBalance] = useState(0)
    // let balance = 0
    function getBalance(){
        calculateFinalPrice()
        let fp = endPrice
        let b = props.maxSpend - fp
        setBalance(b)
        // balance = b
    }


    function updateUnits() {
        let units = 0
        props.products.map(p => {
            if(p.added){
                units+=p.units
            }
        })
        setFinalUnits(units)
    }


    function updateInfos() {
        // useEffect(()=>{
            getBalance()
            updateUnits()
        // })
    }
    useEffect(()=>{updateInfos()})

    return (
        <>
        
            <table className={style.table} onClick={updateInfos}>
                {createHead()}
                <tbody>
                    {createRows()}
                </tbody>
            </table>
            <Resume finalPrice={endPrice} finalUnits={finalUnits} balance={balance}/>
            
        </>
    )
}

//AXIOS FUNCIONOU (COM LOOP)
// export default function Table(props) {
//     console.log(props.products)
//     //passar: array com todos os produtos


//     function createHead() {
//         return (
//             <thead className={style.head}>
//                 <td className={style.first}>Carrinho</td>
//                 <td>Nome</td>
//                 <td>Unidades</td>
//                 <td>Preço Final</td>
//                 <td className={style.last}>Ações</td>
//             </thead>
//         )
//     }


//     function createActions() {
//         return (
//             <>
//             <button className={style.edit}>
//                 {EditIcon}
//             </button>
//             <button className={style.delete}>
//                 {DeleteIcon}
//             </button>
//             </>)
//     }


//     const [endPrice, setFinalPrice] = useState(0)
//     const [finalUnits, setFinalUnits] = useState(0)


//     async function calculateFinalPrice(changeState=true) {
//         let finalPrice = 0
//         props.products.forEach((product, i) => {
//             if(product.added) {
//                     finalPrice+=product.price*product.units
//             }
//         })
//         if(changeState){
//             setFinalPrice(finalPrice)
//         }
//         return finalPrice
//     }


//     // let endPrice = 0
//     // let endUnits= 0

//     function createRows() {
//         useEffect(()=> {calculateFinalPrice()})



//         return props.products.map((product,i) => {
//             let finalPrice = (product.price * product.units).toFixed(2).replace('.', ',')

//             // const [added, setAdded] = useState(product.added)
//             let added = product.added
            
            


//             function toggleAdded() {
//                 added ? product.added=false : product.added=true
//                 added ? added = false : added = true
//                 // added ? setAdded(false) : setAdded(true)
//             }


//             return (
//                 <tr /*key={product.added}*/ className={style.tr}>
//                     <td>
//                         <input type="checkbox" checked={added} 
//                             onClick={() => toggleAdded()}
//                             className={style.chekbox}
//                         />
//                         </td>
//                     <td>{product.name}</td>
//                     <td>{product.units}</td>
//                     <td>{finalPrice}</td>
//                     <td>{createActions()}</td>
//                 </tr>
//             )
//         })//som se receber os clientes
//     }

//     const [balance, setBalance] = useState(0)
//     // let balance = 0
//     function getBalance(){
//         calculateFinalPrice()
//         let fp = endPrice
//         let b = props.maxSpend - fp
//         setBalance(b)
//         // balance = b
//     }


//     function updateUnits() {
//         let units = 0
//         props.products.map(p => {
//             if(p.added){
//                 units+=p.units
//             }
//         })
//         setFinalUnits(units)
//     }


//     function updateInfos() {
//         // useEffect(()=>{
//             getBalance()
//             updateUnits()
//         // })
//     }
//     useEffect(()=>{updateInfos()})

//     return (
//         <>
//             <table className={style.table} onClick={updateInfos}>
//                 {createHead()}
//                 <tbody>
//                     {createRows()}
//                 </tbody>
//             </table>
//             <Resume finalPrice={endPrice} finalUnits={finalUnits} balance={balance}/>
            
//         </>
//     )
// }









//tudo perfeito
// export default function Table(props) {
//     //passar: array com todos os produtos


//     function createHead() {
//         return (
//             <thead className={style.head}>
//                 <td className={style.first}>Carrinho</td>
//                 <td>Nome</td>
//                 <td>Unidades</td>
//                 <td>Preço Final</td>
//                 <td className={style.last}>Ações</td>
//             </thead>
//         )
//     }


//     function createActions() {
//         return (
//             <>
//             <button className={style.edit}>
//                 {EditIcon}
//             </button>
//             <button className={style.delete}>
//                 {DeleteIcon}
//             </button>
//             </>)
//     }


//     const [endPrice, setFinalPrice] = useState(0)
//     const [finalUnits, setFinalUnits] = useState(0)


//     async function calculateFinalPrice(changeState=true) {
//         let finalPrice = 0
//         props.products.forEach((product, i) => {
//             if(product.added) {
//                     finalPrice+=product.price*product.units
//             }
//         })
//         if(changeState){
//             setFinalPrice(finalPrice)
//         }
//         return finalPrice
//     }


//     // let endPrice = 0
//     // let endUnits= 0

//     function createRows() {
//         useEffect(()=> {calculateFinalPrice()})



//         return props.products.map((product,i) => {
//             let finalPrice = (product.price * product.units).toFixed(2).replace('.', ',')

//             const [added, setAdded] = useState(product.added)
            
            


//             function toggleAdded() {
//                 added ? setAdded(false) : setAdded(true)
//                 added ? product.added=false : product.added=true
//             }


//             return (
//                 <tr /*key={product.added}*/ className={style.tr}>
//                     <td>
//                         <input type="checkbox" checked={added} 
//                             onClick={() => toggleAdded()}
//                             className={style.chekbox}
//                         />
//                         </td>
//                     <td>{product.name}</td>
//                     <td>{product.units}</td>
//                     <td>{finalPrice}</td>
//                     <td>{createActions()}</td>
//                 </tr>
//             )
//         })//som se receber os clientes
//     }

//     const [balance, setBalance] = useState(0)
//     // let balance = 0
//     function getBalance(){
//         calculateFinalPrice()
//         let fp = endPrice
//         let b = props.maxSpend - fp
//         setBalance(b)
//         // balance = b
//     }


//     function updateUnits() {
//         let units = 0
//         props.products.map(p => {
//             if(p.added){
//                 units+=p.units
//             }
//         })
//         setFinalUnits(units)
//     }


//     function updateInfos() {
//         // useEffect(()=>{
//             getBalance()
//             updateUnits()
//         // })
//     }
//     useEffect(()=>{updateInfos()})

//     return (
//         <>
//             <table className={style.table} onClick={updateInfos}>
//                 {createHead()}
//                 <tbody>
//                     {createRows()}
//                 </tbody>
//             </table>
//             <Resume finalPrice={endPrice} finalUnits={finalUnits} balance={balance}/>
            
//         </>
//     )
// }

