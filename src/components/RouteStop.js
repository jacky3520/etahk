import React, { useState } from "react";
const RouteStop = (props) => {
    return (
        <div className="pb-2 border-t-2" key={props.stopDetailState.stop}>
            <div className="flex flex-col space-y-2 my-2">
                {
                    props.stopDetailState.map(function (stop, index) {
                        return (
                            <div className="flex rounded-md bg-teal-500 text-white shadow-md p-2" onClick={() => alert(stop.name_tc)}>
                                <div className="mx-3">{index + 1}</div>
                                <div>{stop.name_tc}</div>
                                <div className="flex-grow text-right">{props.routeEtaState[index] != null ? props.routeEtaState[index].eta : ""}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RouteStop    