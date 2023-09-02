// sum.test.js
import { expect, test } from 'vitest'
import { getHelloWorld } from './get-hello-world.function'

test('Given a function getHelloWorld When call it Then returns string Hello World', () => {
    expect(getHelloWorld()).toBe('Hello World!')
})