import React from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import resizeImage from '../../utils/imageResizer'

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
  message,
  setFile
}) => {
  return (
    <Form success={message.success} error={!message.success}>
      <Form.Input
        label='Enter specie'
        data-cy='Specie'
        type='text'
        value={specie}
        onChange={event => setSpecie(event.target.value)}
      />
      <Form.Select
        fluid
        data-cy='Rarity'
        label='Rarity'
        options={selections}
        placeholder='Rarity'
        value={rarity}
        onChange={(e, { value }) => setRarity(value)}
      />
      <Form.TextArea
        label='Notes'
        data-cy='Notes'
        value={notes}
        onChange={event => setNotes(event.target.value)}
      />
      <input
        data-cy='file'
        type='file'
        onChange={event => resizeImage(event.target.files[0], setFile)}
      />
      {message.success ? (
        <Message success content={message.content} />
      ) : (
        <Message error list={message.content} />
      )}
      <Button.Group>
        <Form.Button data-cy='Submit' onClick={handleSubmit}>
          Add new
        </Form.Button>
        <Form.Button onClick={resetFields}>Reset</Form.Button>
      </Button.Group>
    </Form>
  )
}

export default AddObservationForm
