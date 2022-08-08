import React from "react";
import './Busbox.css'

const fetchETA = (route) => {
    // console.log(route);
}

const Busbox = (props) => {
    return (
        <div className="flex flex-col shadow-md-custom mx-2 my-1 rounded-md p-2 hover:cursor-pointer my-3" onClick={fetchETA(props)} key={props.key}>
            <div className="flex  py-2">
                <div className="text-2xl font-semibold w-24">{props.entity.route}</div>
                <div className="flex flex-col place-y-2">
                    <div className="flex align-center"><div className="font-bold mr-2">往</div>{props.entity.dest_tc}</div>
                    <div className="flex align-center"><div className="font-bold mr-2">由</div>{props.entity.orig_tc}</div>
                </div>
            </div>

            {/* <div className="py-2 border-b-2">
                
            </div> */}

        </div>
    )
}

export default Busbox