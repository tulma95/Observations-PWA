export const byDate = (obs1, obs2) => {
  return obs1.date < obs2.date ? 1 : -1
}

export const bySpecie = (obs1, obs2) => {
  return obs1.specie.toLowerCase() >= obs2.specie.toLowerCase() ? 1 : -1
}

export const byRarity = (obs1, obs2) => {
  const rarityValues = {
    common: 1,
    rare: 2,
    'extremely rare': 3
  }
  return rarityValues[obs2.rarity] - rarityValues[obs1.rarity]
}

export default null
