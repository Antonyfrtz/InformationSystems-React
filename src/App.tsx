import { Outlet } from "react-router";
import Navbar from "./components/navbar/NavBar";

function App() {
    return <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>;
}

export default App;