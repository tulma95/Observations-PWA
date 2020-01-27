import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const Observation = ({ specie, rarity, notes, date }) => {
  return (
    <Grid.Row key={notes}>
      <Card
        header={`${specie} ${rarity}`}
        meta={date.toLocaleDateString()}
        description={notes}
      />
    </Grid.Row>
  )
}

export default Observation
