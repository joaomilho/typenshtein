const test = require('ava')
const typiness = require('./typiness')
const regularKeyboard = require('./regularKeyboard')

const typinessForRegularKeyboard = typiness(regularKeyboard)

test('typiness', t => {
	t.is(typinessForRegularKeyboard('a', 's'), 0) // very close, certainly typo
  t.is(typinessForRegularKeyboard('a', 'w'), 0.5000000000000001) // not so much
  t.is(typinessForRegularKeyboard('a', 'p'), 0.9878048780487805) // far away

  t.is(typinessForRegularKeyboard('.', '/'), 1) // not in keyboard...
})
