const Footer = ({onChangePage}) => {
    return(
        <footer className="container footer">
            <ul className="nav nav-center">
                <li onClick={() => {onChangePage('main')}}><img src="icons/transparent_black.svg" alt="coffee"/>Coffee house</li>
                <li onClick={() => {onChangePage('menu')}}>Our coffee</li>
                <li onClick={() => {onChangePage('pleasure')}}>For your pleasure</li>
            </ul>
            <div className="nav nav-center">
                <div className="line"></div>
                <img src="icons/black_coffee.svg" alt="coffee"/>
                <div className="line"></div>
            </div>
        </footer>
    )
}

export default Footer
