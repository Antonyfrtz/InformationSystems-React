import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../api/company'
import { getCompanyProfile } from '../../api/API'

interface Props {}

const CompanyPage = (props: Props) => {

  let {ticker} = useParams()
  const [company, setCompany] = React.useState<CompanyProfile>()

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!) as any;
      setCompany(result.data[0])
    }
    getProfileInit()
  },[])

  return (
    <>{company ? (<div>{company.companyName}</div>):(<div>Company not found!</div>)}</>
  )
}

export default CompanyPage