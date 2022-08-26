import { Link, useParams } from "react-router-dom"


function Nation (){
    const params=useParams()
    const {name}=params
    const singlepage=1
    return (
        <div className="container">
            <div><h1>{name}</h1>
            <Link to={`/${name}/${singlepage}`}>hello</Link>
            </div>
        </div>
    )
}

export default Nation