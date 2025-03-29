import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Login,AppHeader} from "../pages/index.js"

export const AppRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/appheader" element={<AppHeader/>}/>
            </Routes>
        </BrowserRouter>
    )
}