import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {Home} from "../pages/Home/Home.jsx";
import {NewsDetails} from "../components/News/NewsDetails/NewsDetails.jsx";
import {Layout} from "../layout/Layout.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/news/:id' element={<NewsDetails/>}/>
            </Route>
        </>
    )
)