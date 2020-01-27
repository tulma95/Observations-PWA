import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const Observation = ({ name, rarity, notes, date }) => {
  return (
    <Grid.Row key={notes}>
      <Card
        header={name}
        meta={date.toLocaleDateString()}
        description={notes}
      />
    </Grid.Row>
  )
}

export default Observation
