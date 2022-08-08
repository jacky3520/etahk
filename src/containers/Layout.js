import React, { useEffect, useState } from "react";
import Busbox from "../components/Busbox";
import RouteSearch from "../components/RouteSearch";
import './Layout.css'

const Layout = () => {

    const [data, setData] = useState([]);
    const [route, setRoute] = useState([]);

    useEffect(() => {
        fetch("https://data.etabus.gov.hk/v1/transport/kmb/route/")
            .then((res) => res.json())
            .then(
                (result) => {
                    setData(result.data)
                    setRoute(result.data)
                }
            )
    }, [])


    return (
        <div className="flex flex-col object-center routeListBox w-96 shadow-lg fixed">
            <RouteSearch
                data={data}
                setRoute={setRoute}
            />

            <div className=" overflow-scroll scroll-mb-52 routeList">
                {/* {route.map((bus) => (
                    <Busbox 
                        entity={bus}
                    />  
                ))} */}
                {
                    route.map(function (bus, index) {
                        return (
                            <Busbox
                                // key={index}
                                entity={bus}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Layout