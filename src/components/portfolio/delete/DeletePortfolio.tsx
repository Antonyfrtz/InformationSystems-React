import React from 'react'

interface Props {
    portfolioValue: string
    onPortfolioDelete: (e: React.SyntheticEvent) => void
}

const DeletePortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return <div>
    <form onSubmit={onPortfolioDelete}>
        <input type='hidden' value={portfolioValue} readOnly></input>
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
    </form>
  </div>
}

export default DeletePortfolio