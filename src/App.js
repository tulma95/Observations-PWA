import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react'
import MainView from './components/containers/MainView'
import AddObservationView from './components/containers/AddObservationView'

const App = () => {
  const [observations, setObservations] = useState([
    // {
    //   specie: 'Pigeon',
    //   rarity: 'exremely rare',
    //   notes: 'Found behind my room1',
    //   date: new Date()
    // },
    // {
    //   specie: 'Pigeon',
    //   rarity: 'exremely rare',
    //   notes: 'Found behind my room2',
    //   date: new Date()
    // },
    // {
    //   specie: 'Pigeon',
    //   rarity: 'exremely rare',
    //   notes: 'Found behind my room3',
    //   date: new Date()
    // }
  ])

  const addObservation = newObservation => {
    setObservations([...observations, newObservation])
  }

  const panes = [
    {
      menuItem: 'Add observation',
      render: () => (
        <Tab.Pane>
          <AddObservationView addObservation={addObservation} />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'view observations',
      render: () => (
        <Tab.Pane>
          <MainView observations={observations} />
        </Tab.Pane>
      )
    }
  ]

  return <Tab panes={panes} />
}

export default App
