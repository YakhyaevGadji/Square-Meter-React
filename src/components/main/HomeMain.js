import Filter from "../Filter/Filter";
import ObjectItem from "./ObjectItem";
import useFetch from "../fetchRequest/useFetch";
import Preloader from "../loading/Preloader";

function HomeMain() {

    const {data, isLoading, error} = useFetch('https://jsproject.webcademy.ru/items');


    return (
        <div>
            <Filter/>
            <div className="cards-wrapper">
                <div className="container p-0 pt-5">
                    {error && <h1>Error to fetch</h1>}
                    {isLoading && <Preloader/>}
                    {data && <ObjectItem data={data}/>}
                </div>
            </div>
        </div>
    );
}

export default HomeMain;