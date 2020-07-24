# SafeEval
Just safe(?) eval function

## Install
`npm install seval` or `yarn add seval`

## Usage
```js
const seval = require('seval')
const { basic: dangerlist } = require('seval/presets')
// preset list: basic, infLoop, this, blockAll

seval('console.log("Hello, world!")', { dangerlist })
```

## How it works (it's simple!)
- Make a separated box
- Insert some codes
- Remove some danger things
- Run the codes in the box
- Wow, super safe
