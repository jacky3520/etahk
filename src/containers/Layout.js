import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import Busbox from "../components/Busbox";
import RouteSearch from "../components/RouteSearch";
import './Layout.css'

const Layout = () => {

    const [data, setData] = useState([]);
    const [route, setRoute] = useState([]);
    const [stopData, setStopData] = useState([]);
    const [stopDetails, setStopDetails] = useState([])

    useEffect(() => {
        fetch("https://data.etabus.gov.hk/v1/transport/kmb/route/")
            .then((res) => res.json())
            .then(
                (result) => {
                    setData(result.data)
                    setRoute(result.data)
                }
            )

        fetch("https://data.etabus.gov.hk/v1/transport/kmb/route-stop")
            .then((res) => res.json())
            .then(
                (result) => {
                    setStopData(result.data)
                }
            )

        fetch('https://data.etabus.gov.hk/v1/transport/kmb/stop')
            .then((res) => res.json())
            .then(
                (result) => {
                    setStopDetails(result.data)
                }
            )
    }, [])


    return (
        <div className="flex flex-col object-center routeListBox w-96 shadow-xl fixed">
            <RouteSearch
                data={data}
                setRoute={setRoute}
            />

            <div className="overflow-scroll scroll-mb-52 routeList">
                {/* <div className="text-center">載入中...</div> */}
                {
                    route.map(function (bus, index) {
                        return (
                            <Busbox
                                key={index}
                                entity={bus}
                                stopData={stopData}
                                stopDetails={stopDetails}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Layout