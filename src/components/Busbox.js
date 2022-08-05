import React from "react";

const Busbox = (props) => {
    return (
        <div className="flex border-2 mx-2 my-1 rounded-md p-2 hover:cursor-pointer">
            <div className="text-2xl font-semibold w-24">{props.entity.route}</div>
            <div className="flex flex-col place-y-2">
                <div className="flex align-center"><div className="font-bold mr-2">往</div>{props.entity.dest_tc}</div>
                <div className="flex align-center"><div className="font-bold mr-2">由</div>{props.entity.orig_tc}</div>
            </div>
        </div>
    )
}

export default Busbox