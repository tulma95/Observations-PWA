import React from 'react'
import { Form, Button, Message } from 'semantic-ui-react'

const AddObservationForm = ({
  specie,
  setSpecie,
  notes,
  setNotes,
  selections,
  handleSubmit,
  rarity,
  setRarity,
  resetFields,
  message
}) => {
  return (
    <Form success={message.success} error={!message.success}>
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
      {message.success ? (
        <Message success content={message.content} />
      ) : (
        <Message error list={message.content} />
      )}
      <Button.Group>
        <Form.Button onClick={handleSubmit}>Add new</Form.Button>
        <Form.Button onClick={resetFields}>Reset</Form.Button>
      </Button.Group>
    </Form>
  )
}

export default AddObservationForm
