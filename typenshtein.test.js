const test = require('ava')
const typenshtein = require('./typenshtein')
const regularKeyboard = require('./regularKeyboard')

const typenshteinForRegularKeyboard = typenshtein(regularKeyboard)

test('typiness', t => {
  t.is(typenshteinForRegularKeyboard('aaa', 'aaa'), 0) // precise
	t.is(typenshteinForRegularKeyboard('aaa', 'sss'), 0) // very close, certainly typo
  t.is(typenshteinForRegularKeyboard('aaa', 'www'), 1.5000000000000004) // not so much
  t.is(typenshteinForRegularKeyboard('aaa', 'ppp'), 2.9634146341463414) // far away

  t.is(typenshteinForRegularKeyboard('...', '///'), 3) // not in keyboard...
})
