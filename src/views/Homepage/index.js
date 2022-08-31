import { useState } from "react"
import { Link } from "react-router-dom";
const HomepageContainer = () => {


     return (
        <div style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center"}}>
            <div style={{ alignSelf: "center", justifyContent: "center", textAlign: "center"}}>
                <div style={{ marginBottom: 70, fontSize: 30 }}>Test technique alternant Flying For You</div>
                <Link to="/login" style={{ backgroundColor: "#60EED2", border: "none", padding: "10px 30px", borderRadius: 20, cursor: "pointer" }}>{"Se connecter"}</Link>
            </div>
        </div>
     )
}

export default HomepageContainer