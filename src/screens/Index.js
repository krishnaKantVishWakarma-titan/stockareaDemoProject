import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./main.css";
import CardsComponents from './CardsComponents';

const Index = () => {

    const warehosueList = useSelector((state) => state.warehouse.value);
    const [q, setQ] = useState("");
    const [city, setCity] = useState("");
    const [cluster, setCluster] = useState("");
    const [maxl, setMaxl] = useState("9999999");
    const [minl, setMinl] = useState("0");
    const [limit, setLimit] = useState("0-9999999");

    useEffect(() => {
        console.log(warehosueList);
    }, [warehosueList]);

    useEffect(() => {
        const l = limit.split("-");
        // console.log(l[0])
        setMaxl(l[1]);
        setMinl(l[0]);
    }, [limit]);

    const search = data => {
        return data.filter(item => 
            item.name.toLowerCase().indexOf(q) > -1 &&
            item.city.indexOf(city) > -1 &&
            item.cluster.indexOf(cluster) > -1 &&
            item.space_available < parseInt(maxl) &&
            item.space_available > parseInt(minl)
        )
    }

    return <>
        <div className="container">
            <div className="sec1">
                <div className="nav0"><input type="text" onChange={e => setQ(e.target.value)} placeholder="Enter warehouse name ..." /></div>
                <div className="nav1"><span>Filters : </span> 
                    <span>

                        <select onChange={e => setCity(e.target.value)}>
                            <option value="">City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Indore">Indore</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Guwahati">Guwahati</option>
                        </select>
                        <select onChange={e => setCluster(e.target.value)}>
                            <option value="">Cluster</option>
                            <option value="cluster-a-32">cluster-a-32</option>
                            <option value="cluster-a-1">cluster-a-1</option>
                            <option value="cluster-a-21">cluster-a-21</option>
                            <option value="cluster-a-2">cluster-a-2</option>
                            <option value="cluster-v-2">cluster-v-2</option>
                        </select>
                        <select onChange={e => setLimit(e.target.value)}>
                            <option value="0-9999999">Limit range</option>
                            <option value="0-100">0-100</option>
                            <option value="100-1000">100-1000</option>
                            <option value="1000-10000">1000-10000</option>
                            <option value="10000-9999999">10000-9999999</option>
                        </select>

                    </span>
                </div>
            </div>

            <CardsComponents warehosueList={search(warehosueList)} />
            
        </div>
    </>;
}

export default Index;