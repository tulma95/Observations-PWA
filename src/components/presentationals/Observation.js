import React from 'react'
import { Card } from 'semantic-ui-react'

const Observation = ({ specie, rarity, notes, date, id }) => {
  return (
    <Card
      key={date}
      style={{ margin: '10px', wordWrap: 'break-word' }}
      header={specie}
      meta={date.toLocaleString()}
      description={notes}
      extra={rarity}
    />
  )
}

export default Observation
