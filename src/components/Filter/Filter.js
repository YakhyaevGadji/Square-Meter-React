function Filter() {
    return (
        <form className="container p-0">
            <div className="heading-1">Выбор квартир:</div>
            <div className="filter">
                <div className="filter__col">
                    <div className="filter__label">Выбор проекта:</div>
                    <select defaultValue="all" name="complex" id="" className="filter__dropdown">
                        <option value="all">Все проекты</option>
                        <option value="Генеральский">ЖК Генеральский</option>
                        <option value="Речной">ЖК Речной</option>
                        <option value="Лесной">ЖК Лесной</option>
                        <option value="Квантум">ЖК Квантум</option>
                    </select>
                </div>
                <div className="filter__col rooms">
                    <div className="filter__label">Комнат:</div>
                    <div className="rooms__wrapper">
                        <input
                            name="rooms"
                            type="checkbox"
                            id="rooms_1"
                            className="rooms__checkbox"
                            value="1"
                        /><label htmlFor="rooms_1" className="rooms__btn">1</label>
                        <input
                            name="rooms"
                            type="checkbox"
                            id="rooms_2"
                            className="rooms__checkbox"
                            value="2"
                            defaultChecked
                        /><label htmlFor="rooms_2" className="rooms__btn">2</label>
                        <input
                            name="rooms"
                            type="checkbox"
                            id="rooms_3"
                            className="rooms__checkbox"
                            value="3"
                        /><label htmlFor="rooms_3" className="rooms__btn">3</label>
                        <input
                            name="rooms"
                            type="checkbox"
                            id="rooms_4"
                            className="rooms__checkbox"
                            value="4"
                        /><label htmlFor="rooms_4" className="rooms__btn">4</label>
                        <input
                            name="rooms"
                            type="checkbox"
                            id="rooms_5"
                            className="rooms__checkbox"
                            value="5"
                        /><label htmlFor="rooms_5" className="rooms__btn">5</label>
                    </div>
                </div>
                <div className="filter__col">
                    <div className="filter__label">Площадь:</div>
                    <div className="range__wrapper">
                        <label className="range">
                            <div htmlFor="" className="range__label">от</div>
                            <input
                                name="sqmin"
                                min="0"
                                type="number"
                                className="range__input"
                                placeholder="38"
                            />
                            <div className="range__value">м2</div>
                        </label>
                        <label className="range">
                            <div htmlFor="" className="range__label">до</div>
                            <input
                                name="sqmax"
                                min="0"
                                type="number"
                                className="range__input"
                                placeholder="120"
                            />
                            <div className="range__value">м2</div>
                        </label>
                    </div>
                </div>
                <div className="filter__col">
                    <div className="filter__label">Стоимость:</div>
                    <div className="range__wrapper">
                        <div className="range">
                            <label htmlFor="" className="range__label">от</label>
                            <input
                                type="number"
                                name="pricemin"
                                min="0"
                                className="range__input range__input--price"
                                placeholder="2325000"
                            />
                            <div className="range__value">₽</div>
                        </div>
                        <div className="range">
                            <label htmlFor="" className="range__label">до</label>
                            <input
                                type="number"
                                name="pricemax"
                                min="0"
                                className="range__input range__input--price"
                                placeholder="4525000"
                            />
                            <div className="range__value">₽</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter__buttons">
                <button className="filter__show">Показать 119 объектов</button>
                <button className="filter__reset">Сбросить фильтр</button>
            </div>
        </form>
    );
}

export default Filter;