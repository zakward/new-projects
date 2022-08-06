import { React, useState, useEffect } from "react"
import axios from "axios"
import Supply from "./Supply.js"
import Navbar from "./Navbar"

function Supplies() {

    const [ recurringSupplies, setRecurringSupplies ] = useState([ 
        {
            item : "",
            locationName: "",
            locationLink: "",
            price: null,
            dateOfPurchase: "",
            quanity: "",
            purchaseTotal : null
        }
    ])

    const [ toggleSupplyView, setToggleSupplyView] = useState(false)

    // useEffect(() => {
    //     axios.get("/supplies")
    //         .then(res => setRecurringSupplies(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    console.log(recurringSupplies)

    function getSupplies() {
        setToggleSupplyView(true)
        axios.get("/supplies")
        .then(res => setRecurringSupplies(res.data))
        .catch(err => console.log(err))
    }

    const supplyElements = recurringSupplies.map(supply => {
        return <Supply supply = {supply} />
    })

    return (
        <>
            <div className = "supplies-wrapper">
                 <Navbar /> 
                 <h1 className = "supplies-header">Supplies Tracker</h1>
                 <div className = "button-div">
                    <button className = "supply-btn"onClick = {getSupplies}>RECURRING SUPPLIES</button>
                    <button className = "supply-btn">CURRENT INVENTORY</button>
                 </div> 
                 {toggleSupplyView ? <div className = "supply-elements-container">
                    {supplyElements}
                 </div>
                 :
                 <></>
                }
                 
            </div>               


        </>
    )
}

export default Supplies