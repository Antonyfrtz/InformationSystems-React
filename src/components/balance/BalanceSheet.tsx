import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router';
import { getBalanceSheet } from '../../api/API';
import RatioList from '../ratio/RatioList';
import { CompanyBalanceSheet } from '../../api/company';

type Props = {}

const config = [
    {
      label: <div className="font-bold">Total Assets</div>,
      render: (company: CompanyBalanceSheet) => company.totalAssets,
    },
    {
      label: "Current Assets",
      render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
    },
    {
      label: "Total Cash",
      render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    },
    {
      label: "Property & equipment",
      render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
    },
    {
      label: "Intangible Assets",
      render: (company: CompanyBalanceSheet) => company.intangibleAssets,
    },
    {
      label: "Long Term Debt",
      render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
      label: "Total Debt",
      render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
    },
    {
      label: <div className="font-bold">Total Liabilites</div>,
      render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    },
    {
      label: "Current Liabilities",
      render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
    },
    {
      label: "Long-Term Debt",
      render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
      label: "Long-Term Income Taxes",
      render: (company: CompanyBalanceSheet) => company.otherLiabilities,
    },
    {
      label: "Stakeholder's Equity",
      render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
    },
    {
      label: "Retained Earnings",
      render: (company: CompanyBalanceSheet) => company.retainedEarnings,
    },
  ];

const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>()
    const [balanceSheet, setBalanceSheet] = React.useState<CompanyBalanceSheet[]>()
    useEffect(() => {
        const getData = async () => {
            const value = await getBalanceSheet(ticker) as any
            setBalanceSheet(value?.data[0])
        }
        getData()
    }, [])
  return <>
    {balanceSheet ? (<><RatioList config={config} data={balanceSheet}></RatioList></>) : (<>Company not found!</>)}
  </>
}

export default BalanceSheet