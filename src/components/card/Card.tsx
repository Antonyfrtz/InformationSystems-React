import React from 'react'
import './card.css'

interface Props {
    title: string,
    description: string,
    footer: string
}

const Card: React.FC<Props> = ({title,description,footer}: Props) : JSX.Element => {
  return (
    <div className='card'>
        <img src='https://lh3.googleusercontent.com/p/AF1QipMCs57SgmQDG1K0YkYt_ZzczSiEZie-qRpitxpV=s680-w680-h510'></img>
        <div className='card-info'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <p className='card-footer'>{footer}</p>
    </div>
  );
}

export default Card