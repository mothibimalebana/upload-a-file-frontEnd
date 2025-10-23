import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Folders = () => {
    const user = useContext(UserContext)
    return(
        <>
            <p>Folders</p>
        </>
    )
}

export default Folders