import { Route, Routes } from "react-router-dom";
import Nation from "../Pages/Nation";
import SinglePage from "../Pages/SinglePage";



function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<h1>HOME</h1>}/>
            <Route path="/:name" element={<Nation/>}/>
            <Route path="/:name/:singlepage" element={<SinglePage/>}/>
        </Routes>
    )
}
export default AllRoutes