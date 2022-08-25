import { Route, Routes } from "react-router-dom";
import Nation from "../Pages/Nation";
import South from "../Pages/South";


function AllRoutes(){
    return(
        <Routes>
            
            <Route path="/nation" element={<Nation/>}/>
            <Route path="/south" element={<South/>}/>
        </Routes>
    )
}
export default AllRoutes