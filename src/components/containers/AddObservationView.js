import React, { useState, useEffect } from 'react'
import AddObservationForm from '../presentationals/AddObservationForm'
import { Header } from 'semantic-ui-react'

const option = rarity => ({
  id: rarity,
  key: rarity,
  text: rarity,
  value: rarity
})

const generateOptions = (...args) => args.map(option)

const AddObservationView = ({ addObservation }) => {
  const [specie, setSpecie] = useState('')
  const [notes, setNotes] = useState('')
  const [rarity, setRarity] = useState('')
  const [location, setLocation] = useState(undefined)
  const [message, setMessage] = useState({})
  const [file, setFile] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const coords = {
        longitude: position.coords.longitude.toFixed(4),
        latitude: position.coords.latitude.toFixed(4)
      }
      setLocation(coords)
    })
  }, [])

  const handleSubmit = event => {
    const errors = validateForm()

    if (errors.length === 0) {
      const newObservation = {
        specie,
        notes,
        rarity,
        date: new Date(),
        location,
        image: file
      }

      addObservation(newObservation)
      setMessage({
        success: true,
        content: 'Succesfully added new observation'
      })
      resetFields()
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
    setLocation(undefined)
    setFile()
  }

  return (
    <div>
      <Header
        content='Add new Observation'
        size='large'
        style={{ textAlign: 'center' }}
      />
      <AddObservationForm
        specie={specie}
        setSpecie={setSpecie}
        notes={notes}
        setNotes={setNotes}
        handleSubmit={handleSubmit}
        rarity={rarity}
        setRarity={setRarity}
        selections={generateOptions('common', 'rare', 'extremely rare')}
        resetFields={resetFields}
        message={message}
        setFile={setFile}
      />
    </div>
  )
}

export default AddObservationView
