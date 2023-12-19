import { useParams } from "react-router-dom";
import useFetchItem from "../fetchRequest/useFetchItem";
import Preloader from "../loading/Preloader";
import priceFormatter from "../../utils/priceFormatter";

function Object() {

    const {id} = useParams();
    const {item, isLoadin, error} = useFetchItem('https://jsproject.webcademy.ru/items/' + id);

    console.log(item);

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

                        <button className="button-order">Забронировать</button>
                    </div>
                </div>
            </div>
            }
        </div>
        
      
    );
}

export default Object;