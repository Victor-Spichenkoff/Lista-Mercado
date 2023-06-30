interface Props {
    product : {}
}

export default function ProductRow(props: Props) {
    const product:any = props.product

        let finalPrice = (product.price * product.units).toFixed(2).replace('.', ',')

        const [added, setAdded] = useState(product.added)


        function toggleAdded() {
            added ? setAdded(false) : setAdded(true)
            added ? product.added=false : product.added=true
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

}