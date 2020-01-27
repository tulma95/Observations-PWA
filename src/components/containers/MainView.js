import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, GridColumn } from 'semantic-ui-react'
import Observation from '../presentationals/Observation'

const MainView = ({ observations }) => {
  return (
    <div>
      <Grid centered>{observations.map(Observation)}</Grid>
      <Link to="/newObservation">
        <button>Add new observation</button>
      </Link>
    </div>
  )
}

export default MainView
