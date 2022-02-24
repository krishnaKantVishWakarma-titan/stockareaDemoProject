import "./main.css";
import React from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CardsComponents = ({warehosueList}) => {
    const histroy = useHistory();
    return <>
        <div className="sec2">
                
            {warehosueList.map((item, ind) => {
                return <>
                    {/* <div key={ind}>{item.name}</div> */}
                    <div onClick={() => histroy.push({pathname: '/warehouseDetails', state: {id: item.id}})} className="card0" key={ind}>
                        <div className="card01">{item.name}</div>
                        <div className="card02">
                            <div className="card021">City : {item.city}</div>
                            <div className="card022">Type : {item.type}</div>
                            <div className="card023">Space : {item.space_available}</div>
                        </div>
                    </div>
                </>
            })}
            

        </div>
    </>
}

export default CardsComponents;