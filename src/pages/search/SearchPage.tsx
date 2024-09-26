import React, { SyntheticEvent } from 'react'
import Navbar from '../../components/navbar/NavBar'
import ListPortfolio from '../../components/portfolio/list/ListPortfolio'
import Search from '../../components/search/Search'
import CardList from '../../components/cardlist/CardList'
import { searchCompanies } from '../../api/API'
import { CompanySearch } from '../../api/company'
import { PortfolioGet } from "../../models/Portfolio";
import {
    portfolioAddAPI,
    portfolioDeleteAPI,
    portfolioGetAPI,
} from "../../services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {

    const [search, setSearch] = React.useState<string>('')
    const [searchResults, setSearchResults] = React.useState<CompanySearch[]>([])
    const [serverError, setServerError] = React.useState<string>('')
    const [portfolioValues, setPortfolioValues] = React.useState<PortfolioGet[] | null>(
        []
    );

    React.useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = () => {
        portfolioGetAPI()
            .then((res) => {
                if (res?.data) {
                    setPortfolioValues(res?.data);
                }
            })
            .catch((e) => {
                toast.warning("Failed to get portfolio");
                setPortfolioValues(null);
            });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log(e)
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if(typeof result === 'string'){
            setServerError(result)
        } else if (typeof result === 'object' && result !== null && Array.isArray((result as { data: any[] }).data)) {
            setSearchResults((result as { data: any[] }).data);
        }
        console.log(searchResults)
    };

    const onPortfolioCreate = (e: any) => {
        e.preventDefault()
        portfolioAddAPI(e.target[0].value)
            .then((res) => {
                if (res?.status === 204 || res?.status === 200) {
                    toast.success("Stock added to portfolio!");
                    getPortfolio();
                }
            })
            .catch((e) => {
                toast.warning("Could not add stock to portfolio!");
            });
    }

    const onPortfolioDelete = (e: any) => {
        e.preventDefault()
        // remove from portfolio
        portfolioDeleteAPI(e.target[0].value).then((res) => {
            if (res?.status == 204 || res?.status === 200) {
                toast.success("Stock deleted from portfolio!");
                getPortfolio(); // refresh portfolio
            }
        });
    }

    return (
        <div>
            {/*<Hero></Hero>*/}
            <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete}></ListPortfolio>
            <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}></Search>
            <CardList searchResults={searchResults} onPortfolioCreate={onPortfolioCreate}></CardList>
            {serverError && <div>{serverError}</div>}
        </div>
    )
}

export default SearchPage