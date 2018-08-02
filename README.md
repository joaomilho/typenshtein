# typenshtein

A weighted levenshtein that takes typiness into consideration.

Typiness is the quality of being a typo. In lay terms, this means that a
character that is closer to another in a hypothetical keyboard has more typiness
that one that is distant.

In practice though, it just calculates the distance of two points in a cartesian
plain.

Usage:

```js
const { typenshtein, regularKeyboard } = require('typenshtein')

const typenshteinForRegularKeyboard = typenshtein(regularKeyboard)

typenshteinForRegularKeyboard('aaa', 'aaa') // 0 - precise
typenshteinForRegularKeyboard('aaa', 'sss') // 0 - very close, certainly typo
typenshteinForRegularKeyboard('aaa', 'www') // 1.50...4 - not so much
typenshteinForRegularKeyboard('aaa', 'ppp') // 2.9634... - far away

typenshteinForRegularKeyboard('...', '///') // 3 - not in keyboard...
```

### The name

Typenshtein can be a portmanteau of "typo" and "levenshtein". It can also be a
person who is influenced both by Russell's type theory and Ludwig Wittgenstein.
