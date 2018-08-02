const weightedLevenshtein = require('weighted-levenshtein')
const typiness = require('./typiness')

module.exports = keyboard => {
  return weightedLevenshtein(typiness(keyboard))
}
