import priceFormatter from "../../utils/priceFormatter";

function ObjectItem({data}) {
    const objects = data.map((obj) => {
        return (
            <article className="col-md-4" key={obj.id}>  
                <a href="object.html" className="card">
                    <div className="card__header">
                        <div className="card__title">
                            ЖК {obj.complex_name}
                        </div>
                        <div className="card__like card__like--active">
                            <i className="fas fa-heart"></i>
                        </div>
                    </div>
                    <div className="card__img">
                        <img src={obj.image} alt="План квартиры" />
                    </div>
                    <div className="card__desc">
                        <div className="card__price">
                            <div className="card__price-total">
                                {priceFormatter(obj.price_total)} ₽
                            </div>
                            <div className="card__price-per-meter">
                                {priceFormatter(obj.price_sq_m)} ₽/м2
                            </div>
                        </div>

                        <div className="card__params params">
                            <div className="params__item">
                                <div className="params__definition">
                                    Комнат
                                </div>
                                <div className="params__value">{obj.rooms}</div>
                            </div>
                            <div className="params__item">
                                <div className="params__definition">
                                    Площадь
                                </div>
                                <div className="params__value">{obj.square}</div>
                            </div>
                        </div>

                    </div>
                    <div className="card__footer">
                        <div className="card__art">{obj.scu}</div>
                        <div className="card__floor">Этаж {obj.floor} из {obj.floor_total}</div>
                    </div>
                </a>
            </article>
        );
    });

    return (
        <div className="row">
            {objects}
        </div>
    );
}

export default ObjectItem;