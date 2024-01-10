import { useParams } from "react-router-dom";
import useFetchItem from "../fetchRequest/useFetchItem";
import Preloader from "../loading/Preloader";
import priceFormatter from "../../utils/priceFormatter";
import { useState } from "react";

function Object() {

    const {id} = useParams();
    const {item, isLoadin, error} = useFetchItem('https://jsproject.webcademy.ru/items/' + id);
    const [modelState, setModelState] = useState(false);

    return (
        <div>
            {isLoadin && <Preloader/>}
            {error && <h1>Error</h1>}
            {item && <div className="container p-0">
              
                <div className="object">
                    <div className="object__photo">
                        <div className="object__photo-wrapper">
                            <img src={item.image} alt="object" />
                        </div>
                    </div>
              
                    <div className="object__desc">
                        <div className="object__desc-sector">ЖК {item.complex_name} </div>

                        <div className="object__desc-name">
                            <div className="object__desc-title">
                                Студия, {item.square} м2
                            </div>
                            <div className="object__desc-art">{item.scu}</div>

                            <button className="button-favourite">
                                <i className="fas fa-heart"></i> <span>В избранное</span>
                            </button>

                            <button className="button-favourite button-favourite--active">
                                <i className="fas fa-heart"></i> <span>В избранном</span>
                            </button>
                        </div>

                        <div className="object__desc-details">
                            <div className="params">
                                <div className="params__item">
                                    <div className="params__definition">Корпус</div>
                                    <div className="params__value">{item.building}</div>
                                </div>
                                <div className="params__item">
                                    <div className="params__definition">Этаж</div>
                                    <div className="params__value">{item.floor}</div>
                                </div>
                                <div className="params__item">
                                    <div className="params__definition">Номер</div>
                                    <div className="params__value">{item.flat_number}</div>
                                </div>
                                <div className="params__item">
                                    <div className="params__definition">Комнат</div>
                                    <div className="params__value">{item.rooms}</div>
                                </div>
                            </div>
                        </div>

                        <div className="details">
                            <div className="details__row">
                                <div className="details__name">Стоимость</div>
                                <div className="details__value details__value--price">{priceFormatter(item.price_total)} ₽</div>
                            </div>
                            <div className="details__row">
                                <div className="details__name">Цена за м2</div>
                                <div className="details__value">{priceFormatter(item.price_sq_m)} ₽/м2</div>
                            </div>
                            <div className="details__row">
                                <div className="details__name">Площадь</div>
                                <div className="details__value">{item.square} м2</div>
                            </div>
                        </div>

                        <button onClick={() => {setModelState(!modelState)}} className="button-order">Забронировать</button>
                    </div>
                </div>
            </div>}
            {modelState && <div onClick={() => {setModelState(!modelState)}} className="modal-wrapper">
                <div className="modal">
                <div className="modal__header">
                    <div className="modal__title">
                        Заявка на бронирование
                    </div>
                    <div className="modal__details">
                        Квартира <span>96</span> в Первом квартале Дом 5
                        <div className="modal__details-art">ГЕН-112-42</div>
                    </div>
                </div>

                <form className="modal__form">
                    <div className="modal__form-content">
                        <div className="formgroup">
                            <label
                                className="modal__form-input-label"
                                htmlFor="form-phone"
                            >
                                Имя
                            </label>
                            <input
                                type="text"
                                id="form-name"
                                className="modal__form-input"
                                placeholder="Введите имя"
                            />
                        </div>
                        <div className="formgroup">
                            <label
                                className="modal__form-input-label"
                                htmlFor="form-phone"
                            >
                                Телефон
                            </label>
                            <input
                                type="text"
                                id="form-phone"
                                className="modal__form-input"
                                placeholder="+7 (XXX) XXX-XX-XX"
                            />
                        </div>

                        <div className="formgroup formgroup--checkbox">
                            <input type="checkbox" id="policy" defaultChecked />
                            <label className="policy-text" htmlFor="policy"
                                >Я согласен на обработку моих персональных
                                данных. С Политикой в отношении обработки
                                персональных данных ознакомлен и
                                согласен.
                            </label>
                            
                        </div>
                    </div>
                    <input
                        className="modal__submit"
                        type="submit"
                        value="Отправить заявку"
                    />
                </form>
                    <button onClick={() => {setModelState(!modelState)}} className="modal__close">
                        Закрыть
                    </button>
                </div>
            </div>}
        </div>
        
      
    );
}

export default Object;