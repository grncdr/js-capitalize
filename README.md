# capitalize

Capitalize the first letter of a string, or all words in a string.

## Synopsis

Capitalize the first letter of a string:

```javascript
var capitalize = require('./')

var test = require('tape')

test('Capitalize first letter', function (t) {
  t.plan(1)
  t.equal(capitalize("united states"), "United states")
})
```

Or capitalize each word in a string:

```javascript
test('Capitalize each word', function (t) {
  t.plan(1)
  t.equal(capitalize.words("united states"), "United States")
})
```

Discards invalid strings:

```javascript
test('Ignore invalid strings', function (t) {

  t.plan(1)
  t.equal(capitalize.words(' '), ' ');
})
```

## Install

    npm install capitalize

## License

MIT
