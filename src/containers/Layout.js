import React, { useEffect, useState } from "react";
import Busbox from "../components/Busbox";
import RouteSearch from "../components/RouteSearch";
import './Layout.css'

const Layout = () => {

    const [route, setRoute] = useState([]);

    useEffect(() => {
        fetch("https://data.etabus.gov.hk/v1/transport/kmb/route/")
            .then((res) => res.json())
            .then(
                (result) => {
                    setRoute(result.data)
                }
            )
    }, [])


    return (
        <div>
            <RouteSearch />

            <div className="mt-4 ml-6 p-2 object-center shadow-xl max-w-sm rounded-lg overflow-scroll h-4/6 routeList">
                {route.map((bus) => (
                    <Busbox entity={bus} />
                ))}

            </div>
        </div>




    )
}

export default Layout