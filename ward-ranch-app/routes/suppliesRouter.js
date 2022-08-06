const express = require("express")
const suppliesRouter = express.Router()
const Supply = require("../models/supply.js")

//get all
suppliesRouter.get("/", (req, res, next) => {
    Supply.find((err, supply) =>  {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(supply)
    })
})

//post one
suppliesRouter.post("/", (req, res, next) => {
    const newSupply = new Supply(req.body) 
    newSupply.save((err, savedSupply) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedSupply)
    })
})

suppliesRouter.delete("/:supplyId", (req, res, next) => {
    Supply.findByIdAndDelete( {_id: req.params.supplyId},
        (err, deletedSupply) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted Supply item ${deletedSupply.item}`)
        }
        )
})




module.exports = suppliesRouter