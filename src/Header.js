import logo from "./ozon.svg"
function Header() {



    return (
        <header>
            <div className="logoBlock">
                <img className="img" src={logo}/>

            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
               
            </nav>
            <div>

            </div>
            <div>
                <button className="btn">Нажать</button>

            </div>

        </header>
    )
}

export default Header 