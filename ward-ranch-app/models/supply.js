const mongoose = require("mongoose")
const Schema = mongoose.Schema

const supplySchema = new Schema( {

    item : {
        type : String,
        required: true
    },
    locationName: {
        type : String,
        required: false
    },
    locationLink: {
        type: String
    },
    price: {
        type: Number,
        required: false
    },
    dateOfPurchase : [{
            type: Date,
            required: true,
            default: Date.now 
    }],
    quanity : {
        type: Number
    },
    purchaseTotal : {
        type: Number
    },
    imgUrl: {
        type: String
    }
            
}    
)

module.exports = mongoose.model("Supply", supplySchema)