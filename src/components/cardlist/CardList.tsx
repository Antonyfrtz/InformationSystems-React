import React from 'react'
import Card from '../card/Card'

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card title='Hello' description="Hello World" footer="lol" ></Card>
        <Card title='Hello 2' description="Hello World" footer="lol"></Card>
        <Card title='Hello 3' description="Hello World" footer="lol"></Card>
    </div>
  )
}

export default CardList