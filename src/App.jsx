import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.jsx";
import "./App.sass"

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
