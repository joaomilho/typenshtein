module.exports = keyboard => (a, b) => {
  if(!keyboard[a] || !keyboard[b]) return 1

  const [aX, aY] = keyboard[a]
  const [bX, bY] = keyboard[b]
  const distance = Math.sqrt(Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2))

  // use power to make distance even more relevant
  return 1 - (1 / Math.pow(distance, 2))
};
