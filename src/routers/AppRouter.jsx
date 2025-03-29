import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Login } from "../pages/index.js"
//llamar a la libreria de iconos @tabler/core que se instalo

export const AppRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}