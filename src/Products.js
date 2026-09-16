import logo from "./1.png" 
function Products() {
    return (
        <div className="products">
            <div className="card-products">
                <div className="card_top">
                    <div className="card_image">
                        <img src={logo} />
                    </div>
                </div>
                <div className="card_bottom">
                    <div className="card_title">Iphone 17 Pro новый тел</div>
                    <div className="card_title">Iphone 18  Pro новый тел</div>
                    <div className="card_title">1000$</div>
                </div>

            </div>
        </div>
    )
}

export default Products