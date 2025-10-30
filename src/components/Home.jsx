import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const Files = ({files}) => {

    return(
        <div className="files">
            {files != [] ? <p> nothing to see here, have  you tried uploading something?</p> :
                <div className="file">
                    {files.map((file) => console.log(file))}
                </div>
            }
        </div>
    )
}
const Home = ({files}) => {

    return(
        <>
            <div className="container h-full">
                <p className="text-start" >Recently</p>
                <Files files={files}/>
            </div>
        </>
    )
}

export default Home