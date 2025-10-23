import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Home = () => {
    const user = useContext(UserContext);
    return(
        <>
            <div className="container">
                <p className="text-start" >Recently</p>
            </div>
        </>
    )
}

export default Home