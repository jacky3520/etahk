import { data } from "autoprefixer";
import React from "react";

const searchRoute = (e, props) => {
    let filteredRoute = props.data.filter(route => route.route.includes(e.target.value))
    props.setRoute(filteredRoute)
}

const RouteSearch = (props) => {
    return (
        <input type="text" name="route" onChange={event => searchRoute(event, props)} className="border-2 rounded-md py-4 pl-5 placeholder:text-slate-400 font-medium text-xl" placeholder="輸入路線"/>
    )
}

export default RouteSearch