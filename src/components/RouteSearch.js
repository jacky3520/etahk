import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";

// const searchRoute = (e, props) => {
    

//     let filteredRoute = props.data.filter(route => route.route.includes(e.target.value))
//     props.setRoute(filteredRoute)
// }

const RouteSearch =  (props) => {

    const[routeInput, setRouteInput] = useState([])

    const searchRoute = (e) => {
        setRouteInput(e.target.value.toUpperCase())
    }

    useEffect(() => {
        let filteredRoute = props.data.filter(route => route.route.includes(routeInput))
        props.setRoute(filteredRoute)
    }, [routeInput])

    return (
        <input type="text" name="route" id="route" value={routeInput} onChange={searchRoute} className="border-2 m-2 rounded-md py-4 pl-5 placeholder:text-slate-400 font-medium text-xl" placeholder="輸入路線"/>
    )
}

export default RouteSearch