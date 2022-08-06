import React from "react"

function Supply({supply}) {


    //       item : "",
    // locationName: "",
    // locationLink: "",
    // price: null,
    // dateOfPurchase: "",
    // quanity: "",
    // purchaseTotal : null

    const date = new Date(supply.dateOfPurchase).getUTCDate()
    let month = new Date(supply.dateOfPurchase).getUTCMonth()
    month = month + 1
    const year = new Date(supply.dateOfPurchase).getUTCFullYear()

    console.log(date, month, year)

    
    

    return (
        <>

            <div className = "supply-card">
                <img src = {supply.imgUrl} className = "supply-img"/>
                <div className = "details-container">
                    <p>{supply.item.toUpperCase()}</p>
                    <p>{supply.locationName}</p>
                    <p>${supply.price}/ea</p>
                </div>
                             

            </div>

        </>
      

)   
 }

export default Supply