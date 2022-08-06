import { React, useState } from "react"
import {Link} from "react-router-dom"
import arrowDown from "./arrowDown.png"
import arrowUp from "./arrowUp.png"

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    function handleDropDown(){
            setShowMenu(!showMenu)
    }

    

    // if (showMenu === true) {
    //     document.addEventListener("click", handleDropDown)
    // }

    return (
        <>
            <div className="nav-list">
                <button onClick = {handleDropDown}className = "drop-btn">MENU : <img onClick = {handleDropDown} alt = "arrow-down" className = "arrow-down" src = {showMenu ? arrowUp : arrowDown} /></button>
                <div id = "myDropdown" className = {showMenu ? "dropdown-content" : "dropdown-content-hidden"}>
                    <Link className = "nav-item" to = "/">HOME</Link>
                    <Link className = "nav-item" to = "/projects">PROJECTS</Link>
                    <Link className = "nav-item" to = "/supplies">SUPPLIES</Link>
                    <img alt = "arrow-up" className = "arrow-up" onClick = {handleDropDown} src = {arrowUp} />
                </div>
                
                {/* <li></li>
                <li></li>
                <li></li>
                <li></li> */}
            </div>
        </>
    )
}

export default Navbar