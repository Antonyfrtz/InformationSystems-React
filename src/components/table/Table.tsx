import React from 'react'

type Props = {
    data: any
    config: any
}

const Table = ({data, config}: Props) => {
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => {
                    return (
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{val.render(company)}</td>
                    )
                })}
            </tr>
        )
    })
    const renderedHeaders = config.map((val: any) => {
        return ( <th key={val.label} className='p-4 text-left text-xs font-medium text-fray-500 uppercase'>{val.label}</th> )
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