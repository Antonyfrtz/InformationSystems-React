import { Outlet } from "react-router";
import Navbar from "./components/navbar/NavBar";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userAuth";

function App() {
    return <>
        <UserProvider>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </UserProvider>
    </>;
}

export default App;