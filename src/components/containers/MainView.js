import React from 'react'
import { Grid, Dropdown, Header, Container, Divider } from 'semantic-ui-react'
import Observation from '../presentationals/Observation'
import { bySpecie, byRarity, byDate } from '../../utils/sorters'

const MainView = ({ observations, setObservations }) => {
  const sortOptions = [
    optionGenerator('By Date', byDate, observations, setObservations),
    optionGenerator('By Specie', bySpecie, observations, setObservations),
    optionGenerator('By Rarity', byRarity, observations, setObservations)
  ]

  return (
    <Container textAlign='center'>
      <Header size='large' content='Observations' />
      <Divider />
      {observations.length !== 0 && (
        <Dropdown
          data-cy='filterDropdown'
          text='Sort observations'
          options={sortOptions}
          style={{ margin: '10px' }}
        />
      )}
      <Grid columns={3} stackable centered>
        {observations.map(Observation)}
      </Grid>
    </Container>
  )
}

const optionGenerator = (text, sortFunc, observations, observationSetter) => {
  return {
    id: text,
    key: text,
    text,
    onClick: () => {
      const sortedObs = [...observations].sort(sortFunc)
      observationSetter(sortedObs)
    }
  }
}

export default MainView
