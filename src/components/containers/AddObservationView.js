import React, { useState } from 'react'
import AddObservationForm from '../presentationals/AddObservationForm'

const options = [
  { key: 'common', text: 'common', value: 'common' },
  { key: 'rare', text: 'rare', value: 'rare' },
  { key: 'extremely rare', text: 'extremely rare', value: 'extremely rare' }
]

const AddObservationView = ({ addObservation }) => {
  const [specie, setSpecie] = useState('')
  const [notes, setNotes] = useState('')
  const [rarity, setRarity] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const newObservation = {
      specie,
      notes,
      rarity,
      date: new Date()
    }
    addObservation(newObservation)
  }

  return (
    <div>
      <AddObservationForm
        specie={specie}
        setSpecie={setSpecie}
        notes={notes}
        setNotes={setNotes}
        handleSubmit={handleSubmit}
        rarity={rarity}
        setRarity={setRarity}
        selections={options}
      />
    </div>
  )
}

export default AddObservationView
