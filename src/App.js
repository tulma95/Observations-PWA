import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import MainView from './components/containers/MainView'

const App = () => {
  const [observations, setObservations] = useState([
    {
      name: 'Pigeon',
      rarity: 'exremely rare',
      notes: 'Found behind my room1',
      date: new Date()
    },
    {
      name: 'Pigeon',
      rarity: 'exremely rare',
      notes: 'Found behind my room2',
      date: new Date()
    },
    {
      name: 'Pigeon',
      rarity: 'exremely rare',
      notes: 'Found behind my room3',
      date: new Date()
    }
  ])
  return (
    <Switch>
      <Route exact path="/">
        <MainView observations={observations} />
      </Route>
    </Switch>
  )
}

export default App
