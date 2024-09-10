import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage";
import SearchPage from "../pages/search/SearchPage";
import CompanyPage from "../pages/company/CompanyPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <HomePage/>},
            {path: "search", element: <SearchPage/>},
            {path: "company/:ticker", element: <CompanyPage/>},
        ]
    }
])