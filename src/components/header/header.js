
const Header = ({onChangePage}) => {
    return(
        <header>
            <ul className="container nav">
                <li onClick={() => {onChangePage('main')}}><img src="icons/transparent_coffee.svg" alt="coffee"/>Coffee house</li>
                <li onClick={() => {onChangePage('menu')}}>Our coffee</li>
                <li onClick={() => {onChangePage('pleasure')}}>For your pleasure</li>
            </ul>
        </header>
    )
}


export default Header;