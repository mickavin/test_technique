import { Link } from "react-router-dom";
import ROUTES from "constants/routes";
import { homepageStyle } from "styles";
const HomepageContainer = () => {


     return (
        <div style={homepageStyle.container}>
            <div style={homepageStyle.center}>
                <div style={homepageStyle.title}>Test technique alternant Flying For You</div>
                <Link to={ROUTES.Login} style={homepageStyle.button}>{"Se connecter"}</Link>
            </div>
        </div>
     )
}

export default HomepageContainer