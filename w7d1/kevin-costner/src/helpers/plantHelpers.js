export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered)
  const todayDate = new Date()

  const diffInDays = (todayDate - lastWateredDate) / 1000 / 864000

  const isWellWatered = diffInDays < wateringInterval

  return isWellWatered
}