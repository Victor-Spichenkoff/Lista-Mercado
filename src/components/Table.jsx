import { useState } from 'react'
import style from './Table.module.css'
import { DeleteIcon } from './Icons'
import { EditIcon } from './Icons'

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



    function createRows() {
        return props.products.map((product,i) => {
            let finalPrice = (product.price * product.units).toFixed(2).replace('.', ',')

            const [added, setAdded] = useState(product.added)

            function toggleAdded() {
                added ? setAdded(false) : setAdded(true)
            }


            return (
                <tr key={product.added} className={style.tr}>
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

    return (
        <>
            <table className={style.table}>
                {createHead()}
                <tbody>
                    {createRows()}
                </tbody>
            </table>
            <div className={style.finalValue}></div>
        </>
    )
}

