/* eslint-disable react-hooks/exhaustive-deps */
import "./main.css";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from '../features/Warehouse';

const WarehouseDetails = () => {
    const { id } = useLocation().state;
    const dispatch = useDispatch();
    const warehouseList = useSelector((state) => state.warehouse.value);
    const [tab, setTab] = useState(false);

    const [data, setData] = useState({
        name: "",
        code: '',
        city: '',
        space: '',
        type: '',
        cluster: '',
        is_live: false,
    });

    useEffect(() => {
        console.log(warehouseList)
        console.log(id)
        for (var i=0;i<warehouseList.length;i++) {
            if (warehouseList[i].id === id) {
                console.log("ware", warehouseList[i].is_live)
                setData({...data, 
                    name: warehouseList[i].name,
                    code: warehouseList[i].code,
                    city: warehouseList[i].city,
                    space: warehouseList[i].space_available,
                    type: warehouseList[i].type,
                    cluster: warehouseList[i].cluster,
                    is_live: warehouseList[i].is_live
                })
            }
        }
    }, []);

    useEffect(() => {
        console.log(data)
    }, [data])

    return <>
        <div className="container">

            <div className="wd0"><button onClick={() => setTab(true)}>Edit</button></div>
            <div>Name : <span>{data.name}</span></div>
            <div>Code : <span>{data.code}</span></div>
            <div>City : <span>{data.city}</span></div>
            <div>Space Available : <span>{data.space}</span></div>
            <div>Type : <span>{data.space}</span></div>
            <div>Cluster : <span>{data.cluster}</span></div>
            <div>Is Live : {data.is_live ? (<span>Yes</span>) : (<span>No</span>)}</div>

        </div>

        {tab && (
            <>
                <div className="wd01">
                    <div className="wd011">
                        <div className="wd0111"><button onClick={() => setTab(false)}>Close</button></div>

                        <div className="wd0112">
                            <div className="wd01121">Name</div>
                            <input type="text" value={data.name} onChange={e => setData({...data, name: e.target.value})} className="wd0112input" />
                        </div>

                        <div className="wd0112">
                            <div>Cluster</div>
                            <select value={data.cluster}  onChange={e => setData({...data, cluster: e.target.value})}>
                                <option value="cluster-a-32">cluster-a-32</option>
                                <option value="cluster-a-1">cluster-a-1</option>
                                <option value="cluster-a-21">cluster-a-21</option>
                                <option value="cluster-a-2">cluster-a-2</option>
                                <option value="cluster-v-2">cluster-v-2</option>
                            </select>
                        </div>

                        <div className="wd0112">
                            <div>City</div>
                            <select value={data.city} onChange={e => setData({...data, city: e.target.value})}>
                                <option value="Delhi">Delhi</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Indore">Indore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Guwahati">Guwahati</option>
                            </select>
                        </div>

                        <div className="wd0112">
                            <div>Space Available</div>
                            <input type="number" value={data.space} onChange={e => setData({...data, space: e.target.value})} className="wd0112input" />
                        </div>

                        <div className="wd0112">
                            <span>Live status</span>
                            <input type="checkbox" value={data.is_live} checked={data.is_live} onChange={e => setData({...data, is_live: e.target.value})} className="checkBoxEdit" />
                        </div>

                        <div className="wd0113">
                            <button onClick={() => {
                                dispatch(updateData({id: id, data: data}));
                                setTab(false);
                            }}>Save</button>
                        </div>

                    </div>
                </div>
            </>
        )}
    </>
}

export default WarehouseDetails;