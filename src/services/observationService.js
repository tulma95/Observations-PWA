import { openDB } from 'idb'

const db = openDB('Observations', 1, {
  upgrade(db) {
    const store = db.createObjectStore('observations', {
      keyPath: 'id',
      autoIncrement: true
    })
    store.createIndex('date', 'date')
  }
})

const getAllObservations = async () => {
  const openedDb = await db
  const data = await openedDb.getAll('observations')
  return data
}

const addObservation = async observation => {
  const openedDb = await db
  await openedDb.add('observations', observation)
}

export default { getAllObservations, addObservation }
