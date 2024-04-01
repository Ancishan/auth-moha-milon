import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
            <h2>This is home {authInfo.name}</h2>
        </div>
    );
};

export default Home;