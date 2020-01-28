import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Observation = ({ specie, rarity, notes, date, location, image }) => {
  const meta = (
    <Card.Meta>
      <Icon name='calendar alternate outline' /> {date.toLocaleString()} <br />
      {location && (
        <div>
          <Icon name='location arrow' size='small' />
          {`${location.latitude} ${location.longitude}`}
        </div>
      )}
    </Card.Meta>
  )

  return (
    <Card
      key={date}
      style={{ margin: '10px', wordWrap: 'break-word' }}
      header={specie}
      image={image && image}
      meta={meta}
      description={notes}
      extra={rarity}
    />
  )
}

export default Observation
