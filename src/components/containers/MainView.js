import React from 'react'
import { Grid } from 'semantic-ui-react'
import Observation from '../presentationals/Observation'

const MainView = ({ observations }) => {
  return (
    <div>
      <Grid centered>{observations.map(Observation)}</Grid>
    </div>
  )
}

export default MainView
