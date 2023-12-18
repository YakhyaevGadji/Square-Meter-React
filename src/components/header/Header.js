import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="top-panel">
            <div className="top-panel__container">
                <div className="top-panel__title">
                    интернет магазин недвижимости
                </div>
                <div className="top-panel__favourites">
                    <Link to="/favorite">
                        <button className="btn-show-favourites">
                            <i className="fas fa-heart"></i>Избранное
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;