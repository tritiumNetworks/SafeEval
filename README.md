# SafeEval
Just safe(?) eval function

## Install
`npm install seval` or `yarn add seval`

## Usage
```js
const seval = require('seval')

const option = {
  allowRequire: false,
  allowProcess: false,
  allowModule: false
}

seval('console.log("Hello, world!")', option)
```

## How it works (it's simple!)
- Make a separated box
- Insert some codes
- Remove some danger things
- Run the codes in the box
- Wow, super safe
