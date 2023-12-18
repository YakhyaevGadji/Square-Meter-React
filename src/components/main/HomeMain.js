import Filter from "../Filter/Filter";
import ObjectItem from "./ObjectItem";

function HomeMain() {
    return (
        <>
            <Filter/>
            <div className="cards-wrapper">
                <div className="container p-0 pt-5">
                    <ObjectItem/>
                </div>
            </div>
        </>
    );
}

export default HomeMain;