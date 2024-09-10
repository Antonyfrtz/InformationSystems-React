import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage";
import SearchPage from "../pages/search/SearchPage";
import CompanyPage from "../pages/company/CompanyPage";
import CompanyProfile from "../components/company/CompanyProfile";
import IncomeStatement from "../components/income/IncomeStatement";
import DesignPage from "../pages/design/DesignPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <HomePage/>},
            {path: "design-guide", element: <DesignPage/>},
            {path: "search", element: <SearchPage/>},
            {path: "company/:ticker", element: <CompanyPage/>, 
                children: [
                    {path: "company-profile", element: <CompanyProfile/>},
                    {path: "income-statement", element: <IncomeStatement/>},
                ]
            },
        ]
    }
])