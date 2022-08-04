import React, {useEffect, useState} from "react";

const Layout = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://data.etabus.gov.hk/v1/transport/kmb/route/')
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    console.log(items);
                }
            )
    }, [])

    return(
        <div>Testing 12123... </div>
    )
}

export default Layout