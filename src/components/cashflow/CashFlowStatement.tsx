import React, { useEffect } from 'react'
import { CompanyCashFlow } from '../../api/company';
import { useOutletContext } from 'react-router';
import { getCashFlowStatement } from '../../api/API';
import Table from '../table/Table';
import Spinner from '../spinner/Spinner';
import { formatLargeMonetaryNumber } from '../../helpers/NumberFormatting';

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];


const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>()
    const [cashflowData, setCashflowData] = React.useState<CompanyCashFlow[]>([])
    useEffect(() => {
        const getCashFlow = async () => {
            const result = await getCashFlowStatement(ticker) as any
            setCashflowData(result?.data)
        }
        getCashFlow()
    }, [])
  return <>
  {cashflowData ? (<Table config={config} data={cashflowData}></Table>) : (<Spinner></Spinner>)}
    </>
}

export default CashFlowStatement