import React, { SyntheticEvent } from 'react'
import Navbar from '../../components/navbar/NavBar'
import ListPortfolio from '../../components/portfolio/list/ListPortfolio'
import Search from '../../components/search/Search'
import CardList from '../../components/cardlist/CardList'
import { searchCompanies } from '../../api/API'
import { CompanySearch } from '../../api/company'

interface Props {}

const SearchPage = (props: Props) => {

    const [search, setSearch] = React.useState<string>('')
    const [searchResults, setSearchResults] = React.useState<CompanySearch[]>([])
    const [serverError, setServerError] = React.useState<string>('')
    const [portfolioValues, setPortfolioValues] = React.useState<string[]>([])

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
        // only add unique values
        const exists = portfolioValues.find((portfolioValue) => portfolioValue === e.target[0].value)
        if (exists) {
            return
        }
        // add to portfolio
        const updatedPortfolio = [...portfolioValues, e.target[0].value]
        setPortfolioValues(updatedPortfolio)
    }

    const onPortfolioDelete = (e: any) => {
        e.preventDefault()
        // remove from portfolio
        const updatedPortfolio = portfolioValues.filter((portfolioValue) => portfolioValue !== e.target[0].value)
        setPortfolioValues(updatedPortfolio)
    }

    return (
        <div>
            {/*<Hero></Hero>*/}
            <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}></ListPortfolio>
            <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}></Search>
            <CardList searchResults={searchResults} onPortfolioCreate={onPortfolioCreate}></CardList>
            {serverError && <div>{serverError}</div>}
        </div>
    )
}

export default SearchPage