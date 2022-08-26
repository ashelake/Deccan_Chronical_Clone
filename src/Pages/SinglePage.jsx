import { useParams } from "react-router-dom"

function SinglePage(){
    const para=useParams()
    const {singlepage}=para
    return(
    <div className="container">
        <div>
           
            <h1>I am INSIDE {singlepage}</h1>
        </div>
    </div>
    )
}

export default SinglePage