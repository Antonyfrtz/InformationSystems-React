import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../api/company'
import { getCompanyProfile } from '../../api/API'
import Sidebar from '../../components/sidebar/Sidebar'
import CompanyDash from '../../components/company/CompanyDash'
import Tile from '../../components/tile/Tile'
import Spinner from '../../components/spinner/Spinner'

interface Props {}

const CompanyPage = (props: Props) => {

  let {ticker} = useParams()
  const [company, setCompany] = React.useState<CompanyProfile>()

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!) as any;
      setCompany(result?.data[0])
    }
    getProfileInit()
  },[])

  return (
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <Sidebar></Sidebar>
        <CompanyDash ticker={ticker!}>
          {company ? (
            <>
              <Tile title="Company Title" subtitle={company.companyName} />
              <Tile title="Price" subtitle={"$"+company.price.toString()} />
              <Tile title="Sector" subtitle={company.sector} />
              <Tile title="CEO" subtitle={company.ceo} />
              <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>{company.description}</p>
            </>
          ) : (
            <Spinner></Spinner>
          )}
        </CompanyDash>
        </div>
  )
}

export default CompanyPage