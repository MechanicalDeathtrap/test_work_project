import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";


export const Layout = () =>{
    return(
        <main >
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    )
}