# capitalize

Capitalize the first letter of a string, or all words in a string.

## Synopsis

Capitalize the first letter of a string:

```javascript
var capitalize = require('capitalize')

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

No matter the original case:

```javascript
test('Capitalize first letter with original string...', function (t) {
  t.plan(2)
  
  t.test('...in upper case', function (t1) {
    t1.plan(1)
    t1.equal(capitalize.words("UNITED STATES"), "United States")
  })
  
  t.test('...in mixed case', function (t2) {
    t2.plan(1)
    t2.equal(capitalize.words("uNiTeD sTaTeS"), "United States")
  })
  
})

test('Capitalize each word with original string...', function (t) {
  t.plan(2)
  
  t.test('...in upper case', function (t1) {
    t1.plan(1)
    t1.equal(capitalize.words("UNITED STATES"), "United States")
  })
  
  t.test('...in mixed case', function (t2) {
    t2.plan(1)
    t2.equal(capitalize.words("uNiTeD sTaTeS"), "United States")
  })
  
})
```

Thanks to [@c990802](https://github.com/grncdr/js-capitalize/pull/2) and [Stack Overflow](http://stackoverflow.com/questions/20690499/concrete-javascript-regex-for-accented-characters-diacritics), capitalize handles international characters:

```javascript
test('Capitalize words with international characters', function (t) {
  t.plan(1)
  t.equal(capitalize.words('hello-cañapolísas'), 'Hello-Cañapolísas')
})
```

and thanks to [@ultraflynn](https://github.com/grncdr/js-capitalize/pull/3), capitalize properly handles quotes within the string:

```javascript
test('Capitalize each word, ignoring quotes', function(t) {
    t.plan(1)
    t.equal(capitalize.words("it's a nice day"), "It's A Nice Day")
})
```

## Install

    npm install capitalize

## License

MIT
