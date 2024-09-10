import React from 'react'
import Table from '../../components/table/Table'
import RatioList from '../../components/ratio/RatioList'
import { testIncomeStatementData } from '../../components/table/testData'

type Props = {}

const tableConfig = [
    {
      label: "Market Cap",
      render: (company: any) => (company.marketCapTTM),
      subTitle: "Total value of all a company's shares of stock",
    },
]

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Design Page</h1>
        <h2>This is the design page, housing aspects of this app's design</h2>
        <RatioList data={testIncomeStatementData} config={tableConfig}></RatioList>
        <Table></Table>
    </>
  )
}

export default DesignPage