function ObjectItem() {
    return (
        <article className="col-md-4">
                  
            <a href="object.html" className="card">
                <div className="card__header">
                    <div className="card__title">
                        ЖК Генеральский
                    </div>
                    <div className="card__like card__like--active">
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
                <div className="card__img">
                    <img src="img/flat-plan.png" alt="План квартиры" />
                </div>
                <div className="card__desc">
                    <div className="card__price">
                        <div className="card__price-total">
                            4 200 000 ₽
                        </div>
                        <div className="card__price-per-meter">
                            64 000 ₽/м2
                        </div>
                    </div>
              
                    <div className="card__params params">
                        <div className="params__item">
                            <div className="params__definition">
                                Комнат
                            </div>
                            <div className="params__value">1</div>
                        </div>
                        <div className="params__item">
                            <div className="params__definition">
                                Площадь
                            </div>
                            <div className="params__value">56</div>
                        </div>
                    </div>
                
                </div>
                <div className="card__footer">
                    <div className="card__art">ГЕН-112-42</div>
                    <div className="card__floor">Этаж 4 из 12</div>
                </div>
            </a>
             
        </article>
    );
}

export default ObjectItem;