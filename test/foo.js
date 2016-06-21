const assert = require('power-assert')
const { test, fixture } = require('./helper')

test('simple test', () => {
  assert(1 + 1 === 20, 11)
})

test('async test', () => {
  return new Promise(resolve => {
    assert(1 + 1 === 200)
    resolve()
  })
})

const before = () => 3
const after = context => {}
test('before/after', fixture({ before, after }, context => {
  assert(context === 3)
}))
