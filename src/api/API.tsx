import { CompanySearch } from "./company";
import axios from "axios";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async(query: string) => {
    try{
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`)
        return data
    }
    catch(error){
        console.log(error)
        return error
    }
}