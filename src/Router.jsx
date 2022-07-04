import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home";

function Router() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Router;