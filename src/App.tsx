import React, { SyntheticEvent } from 'react';
import './App.css';
import CardList from './components/cardlist/CardList';
import Search from './components/search/Search';
import { CompanySearch } from './api/company';
import { searchCompanies } from './api/API';

function App() {

    
    const [search, setSearch] = React.useState<string>('')
    const [searchResults, setSearchResults] = React.useState<CompanySearch[]>([])
    const [serverError, setServerError] = React.useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log(e)
    }

    const onClick = async (e: SyntheticEvent) => {
        const result = await searchCompanies(search);
        if(typeof result === 'string'){
            setServerError(result)
        } else if (typeof result === 'object' && result !== null && Array.isArray((result as { data: any[] }).data)) {
            setSearchResults((result as { data: any[] }).data);
        }
        console.log(searchResults)
    };

    return (
        <div>
            <Search onClick={onClick} search={search} handleChange={handleChange}></Search>
            <CardList></CardList>
        </div>
    );

}

export default App;