import style from './Resume.module.css'

export default function Resume(props){ 
    //UNIDAES
    //PRECO



    return (
        <table className={style.table}>
            <thead className={style.head}>
                <td className={style.first}>Resumo</td>
                <td>Unidades Compradas</td>
                <td>Preço Final</td>
                <td className={style.last}>Saldo</td>
            </thead>
            <tbody>
                <tr className={style.tr}>
                    <td>Dados da Compra</td>
                    <td>{props.finalUnits}</td>
                    <td>R$ {props.finalPrice.toFixed(2).replace('.', ',')}</td>
                    <td>{props.balance}</td>
                </tr>
            </tbody>
        </table>
    )
}