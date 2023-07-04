import style from './Header.module.css'

export default function Header(props) {
    return <div className={style.div}>
        <h1 className={style.titulo}>{props.titulo}</h1>
    </div>

}