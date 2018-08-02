# typenshtein

A weighted levenshtein that takes typiness into consideration.

Typiness is the relative quality of being a typo. In lay terms, this means that
a character that is closer to another in a hypothetical keyboard has more
typiness relative to the other that one that is distant.

A typo is when a creature with the capacity of writting potencially correct
words – typically Humans – fails to do so because its members employed in that
task – typically fingers – do not perform their function correctly, either by a
mismatch between their central nervous system sygnals and the member motricity
execution or simply because they are using a keyboard that they are not used to
– typically a swedish one –, so that their "muscle memory" fails to "remember"
the right moves and end up typing one or more wrong characters. The wrongly typed
characters statistically tend to be physically close to the originally intended
character, and a proper detection of typos needs to take that into consideration.

Typos are normally not intentional, but this library can detect also intentional
ones.

Detecting typos is an important thing to do because a typo can, for instance
prevent the proper delivery of a vital email, or change the meaning of an
intended message from "do you have a small unit of time to help me?", like in
"do you have a sec?" to "where you born in a determined gender", like in "do
you have a sex?". This is just one example of possible misunderstanding, but
they may be harmful enough to end marriages and even cause global wars.

In practice though, this library just calculates the distance of two points in a
cartesian plain.

Usage:

```js
const { typenshtein, regularKeyboard } = require('typenshtein')

const typenshteinForRegularKeyboard = typenshtein(regularKeyboard)

typenshteinForRegularKeyboard('aaa', 'aaa') // 0 - precise
typenshteinForRegularKeyboard('aaa', 'sss') // 0 - very close, certainly typo
typenshteinForRegularKeyboard('aaa', 'www') // 1.50...4 - not so much
typenshteinForRegularKeyboard('aaa', 'ppp') // 2.9634... - far away

typenshteinForRegularKeyboard('...', '///') // 3 - not in keyboard...

// your own custom keyboard
const { typenshtein } = require('typenshtein')

const typenshteinForMyKeyboard = typenshtein({
  'ä': [0, 0],
  'β': [0, 1],
  ...
})
```

### Custom keyboards

As shown in the example above, you can create your own keyboard. A keyboard is
just a map – an object –, with the characters as keys, and a vector: an array
with 2 items, where the first represents the row of the character in the
keyboard and the second represents the column. For instance, in a regular qwerty
keyboard, `q` would be `[0, 0]`, `w` would be `[0, 1]` and so on. `a`, being in
the next row would be `[1, 0]`.

### The name

Typenshtein can be a portmanteau of "typo" and "levenshtein". It can also be a
person who is influenced both by Russell's type theory and Ludwig Wittgenstein.
