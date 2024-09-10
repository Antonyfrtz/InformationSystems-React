import React from 'react'
import { testIncomeStatementData } from './testData'

const data = testIncomeStatementData

type Props = {}

type Company = (typeof data)[0] // Company is the type of the first element in the data array

const configs = [
    {
        label: 'Year',
        render: (company: Company) => company.acceptedDate
    },
    {
        label: "Cost of Revenue",
        render: (company: Company) => company.costOfRevenue
    }
]

const Table = (props: Props) => {
    const renderedRows = data.map((company) => {
        return (
            <tr key={company.cik}>
                {configs.map((config) => {
                    return (
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{config.render(company)}</td>
                    )
                })}
            </tr>
        )
    })
    const renderedHeaders = configs.map((config) => {
        return ( <th key={config.label} className='p-4 text-left text-xs font-medium text-fray-500 uppercase'>{config.label}</th> )
    })
  return (
    <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8'>
        <table>
            <thead className='min-w-full divide-y divide=gray-200 m-5'>
                <tr>
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    </div>
  )
}

export default Table