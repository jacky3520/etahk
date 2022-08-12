import React, { useState, useEffect } from "react";
import './Busbox.css'
import RouteStop from "./RouteStop";
import moment from "moment";
import 'moment/locale/zh-hk'


const Busbox = (props) => {
    var routeStop, routeStopDetails = [], routeETA = []
    const [stopDetailState, setStopDetailState] = useState([])
    const [routeEtaState, setRouteEtaState] = useState([])
    const [showETA, setShowETA] = useState(false)

    const showRouteEta = () => {
        setShowETA(!showETA)
    }

    useEffect(() => {
        if (showETA) {
            moment.locale('zh-hk')

            routeStop = props.stopData.filter(route => route.route == props.entity.route && route.bound == props.entity.bound && route.service_type == props.entity.service_type)

            routeStop.map(function (stop) {
                routeStopDetails.push(props.stopDetails.filter(stopDetail => stopDetail.stop == stop.stop)[0])
            })

            setStopDetailState(routeStopDetails)

            fetch(`https://data.etabus.gov.hk/v1/transport/kmb/route-eta/${props.entity.route}/${props.entity.service_type}`)
                .then((res) => res.json())
                .then(
                    (result) => {
                        routeETA = result.data.filter(eta => eta.dir == props.entity.bound && eta.eta_seq == 1)
                        routeETA.map(eta => {
                            if (eta.eta != null)
                                eta.eta = moment(eta.eta).locale('zh-hk').fromNow(true) == "幾秒" ? "即將抵達" : moment(eta.eta).locale('zh-hk').fromNow(true)
                        })
                        setRouteEtaState(routeETA)
                    }
                )
        }
    }, [showETA])

    return (
        <div className="flex flex-col shadow-md-custom mx-2 my-1 rounded-md p-2 hover:cursor-pointer my-3" key={props.index}>
            <div className="flex py-2" onClick={showRouteEta}>
                <div className="text-2xl font-semibold w-24 pl-2 my-auto">{props.entity.route}</div>
                <div className="flex flex-col place-y-2">
                    <div className="flex align-center"><div className="font-bold mr-2">往</div>{props.entity.dest_tc}</div>
                    <div className="flex align-center"><div className="font-bold mr-2">由</div>{props.entity.orig_tc}</div>
                </div>
            </div>

            {
                showETA ? 
                <RouteStop
                    stopDetailState={stopDetailState}
                    routeEtaState={routeEtaState}
                /> : null
            }
        </div>
    )
}

export default Busbox