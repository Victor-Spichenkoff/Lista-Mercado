import style from './Header.module.css'

export default function Header(props) {
    return <h1 className={style.titulo}>{props.titulo}</h1>

}