import React, { useState } from 'react'
import AddObservationForm from '../presentationals/AddObservationForm'
import observationService from '../../services/observationService'

const options = [
  { key: 'common', text: 'common', value: 'common' },
  { key: 'rare', text: 'rare', value: 'rare' },
  { key: 'extremely rare', text: 'extremely rare', value: 'extremely rare' }
]

const AddObservationView = ({ addObservation }) => {
  const [specie, setSpecie] = useState('')
  const [notes, setNotes] = useState('')
  const [rarity, setRarity] = useState('')
  const [message, setMessage] = useState({})

  const handleSubmit = () => {
    const newObservation = {
      specie,
      notes,
      rarity,
      date: new Date()
    }
    observationService.addObservation(newObservation)

    const errors = validateForm()

    if (errors.length === 0) {
      resetFields()
      addObservation(newObservation)
      setMessage({
        success: true,
        content: 'Succesfully added new observation'
      })
    } else {
      setMessage({
        success: false,
        content: errors
      })
    }
  }

  const validateForm = () => {
    let errors = []
    specie || errors.push("Specie can't be empty")
    rarity || errors.push('You must choose rarity')
    notes || errors.push("Notes can't be empty")
    return errors
  }

  const resetFields = () => {
    setSpecie('')
    setNotes('')
    setRarity('')
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
        resetFields={resetFields}
        message={message}
      />
    </div>
  )
}

export default AddObservationView
