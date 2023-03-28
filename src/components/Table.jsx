import { useEffect, useState } from 'react'
import style from './Table.module.css'
import { DeleteIcon } from './Icons'
import { EditIcon } from './Icons'
import Resume from './Resume'

export default function Table(props) {
    //passar: array com todos os produtos


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


    function createActions() {
        return (
            <>
            <button className={style.edit}>
                {EditIcon}
            </button>
            <button className={style.delete}>
                {DeleteIcon}
            </button>
            </>)
    }


    const [endPrice, setFinalPrice] = useState(0)
    // const [finalUnits, setFinalUnits] = useState(0)


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
    let endUnits= 0

    function createRows() {
        useEffect(()=>  calculateFinalPrice())



        return props.products.map((product,i) => {
            let finalPrice = (product.price * product.units).toFixed(2).replace('.', ',')

            const [added, setAdded] = useState(product.added)
            
            
            // if(i===0){
            //     useEffect(()=>{

            //         setFinalPrice(0)
            //     })
            // }
            // if(product.added && i<props.products) {
            //     // endPrice += product.price * product.units
            //     // endUnits += product.units
            //     useEffect(()=>{
            //     let fp = endPrice
            //     console.log(fp)
            //     fp+=product.price*product.units
            //     setFinalPrice(fp)})
            // }
            //USANDO ESTADOS


            // let fu = finalUnits
            // fu+=product.units
            // setFinalUnits(fu)


            function toggleAdded() {
                added ? setAdded(false) : setAdded(true)
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
                    <td>{createActions()}</td>
                </tr>
            )
        })//som se receber os clientes
    }

    const [balance, setBalance] = useState(0)
    function getBalance(){
        let fp = calculateFinalPrice(changeState=false)
        let b = props.maxSpend - fp
        setBalance(b)
    }


    function updateInfos() {
        useEffect(()=>{
            getBalance()
        })
    }

    return (
        <>
            <table className={style.table} /*onClick={updateInfos}*/>
                {createHead()}
                <tbody>
                    {createRows()}
                </tbody>
            </table>
            <Resume finalPrice={endPrice} finalUnits={endUnits} balance={balance}/>
            
        </>
    )
}

