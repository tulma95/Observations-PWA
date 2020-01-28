import React from 'react'
import { Grid, Dropdown } from 'semantic-ui-react'
import Observation from '../presentationals/Observation'
import { bySpecie, byRarity, byDate } from '../../utils/sorters'

const optionGenerator = (text, sortFunc, observations, observationSetter) => {
  return {
    key: text,
    text,
    onClick: () => {
      const sortedObs = [...observations].sort(sortFunc)
      observationSetter(sortedObs)
    }
  }
}

const MainView = ({ observations, setObservations }) => {
  const sortOptions = [
    optionGenerator('By Date', byDate, observations, setObservations),
    optionGenerator('By Specie', bySpecie, observations, setObservations),
    optionGenerator('By Rarity', byRarity, observations, setObservations)
  ]

  return (
    <div style={{ margin: '10px' }}>
      <Dropdown
        placeholder='Sort list'
        fluid
        selection
        options={sortOptions}
        style={{ margin: '10px' }}
      />
      <Grid columns={3} stackable centered>
        {observations.map(Observation)}
      </Grid>
    </div>
  )
}

export default MainView
