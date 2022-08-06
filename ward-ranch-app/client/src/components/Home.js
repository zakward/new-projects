import React from "react"
import Navbar from "./Navbar"

function Home() {
    return (
        <div className = "home-container">
            <Navbar />
            <div className = "main-header">
                <h3 id = "title" >Ward Family Ranch</h3>
            </div>
        </div>
    )
}

export default Home