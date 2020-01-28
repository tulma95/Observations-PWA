import React, { useState, useEffect } from 'react'
import { Tab } from 'semantic-ui-react'
import MainView from './components/containers/MainView'
import AddObservationView from './components/containers/AddObservationView'
import observationService from './services/observationService'
import { byDate } from './utils/sorters'

const App = () => {
  const [observations, setObservations] = useState([])

  useEffect(() => {
    const fetchAllObservations = async () => {
      const observations = await observationService.getAllObservations()
      const sorted = observations.sort(byDate)
      setObservations(sorted)
    }
    fetchAllObservations()
  }, [])

  const addObservation = newObservation => {
    observationService.addObservation(newObservation)
    setObservations([newObservation, ...observations])
  }

  const panes = [
    {
      menuItem: 'View observations',
      render: () => (
        <Tab.Pane>
          <MainView
            observations={observations}
            setObservations={setObservations}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Add observation',
      render: () => (
        <Tab.Pane>
          <AddObservationView addObservation={addObservation} />
        </Tab.Pane>
      )
    }
  ]

  return <Tab panes={panes} />
}

export default App
