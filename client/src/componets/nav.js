import React from 'react';
import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav style={{width: "100%",height: "50px", borderBottom:"solid 2px black", marginBottom:"30px"}}>
            <p>
                <b style={{fontSize:"larger", margin:"20px"}}>Google Books </b>
                <b >
                    <Link to="/" style={{ textDecoration: "none" }}>Search</Link>
                </b>
                <b>
                    <Link to="/save" style={{ textDecoration: "none" }}> Save</Link>
                </b>
            </p>
        </nav>
    )
}
export default Nav;