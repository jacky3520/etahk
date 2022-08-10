import React, { useState } from "react";
import moment from "moment";

const RouteStop = (props) => {
    // console.log(props.routeEtaState)

    

    return (
        <div className="pb-2 border-t-2" key={props.stopDetailState.stop}>
            {
                <div className="flex flex-col space-y-2 my-2">
                    {
                        props.stopDetailState.map(function (stop, index) {
                            console.log()
                            return (
                                <div className="flex rounded-md bg-teal-500 text-white shadow-md p-2">
                                    <div className="mx-3">{index + 1}</div>
                                    <div>{stop.name_tc}</div>
                                    <div className="flex-grow text-right">{props.routeEtaState[index] ? props.routeEtaState[index].eta : ""}</div>
                                </div>
                            )
                        })
                    }
                </div>

            }
        </div>
    )
}

export default RouteStop