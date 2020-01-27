import React from 'react'
import { Form } from 'semantic-ui-react'

const AddObservationForm = ({
  specie,
  setSpecie,
  notes,
  setNotes,
  selections,
  handleSubmit,
  rarity,
  setRarity
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label='Enter specie'
        type='text'
        value={specie}
        onChange={event => setSpecie(event.target.value)}
      />
      <Form.Select
        fluid
        label='Rarity'
        options={selections}
        placeholder='rarity'
        value={rarity}
        onChange={(e, { value }) => setRarity(value)}
      />
      <Form.TextArea
        label='notes'
        value={notes}
        onChange={event => setNotes(event.target.value)}
      />
      <Form.Button type='submit'>Add new</Form.Button>
    </Form>
  )
}

export default AddObservationForm
