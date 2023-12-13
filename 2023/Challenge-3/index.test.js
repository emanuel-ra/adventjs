const findNaughtyStep = require('./index')


test(`expect to be e`, ()=>{
    const original = 'abcd'
    const modified = 'abcde'
    expect(findNaughtyStep(original, modified)).toBe('e')
})


test('expect to be f', ()=>{
    const original = 'stepfor'
    const modified = 'stepor'
    expect(findNaughtyStep(original, modified)).toBe('f')
})

test('expect to be empty', ()=>{
    const original = 'abcde'
    const modified = 'abcde'
    expect(findNaughtyStep(original, modified)).toBe('')
})

test('expect to be empty', ()=>{
    const original = 'a'
    const modified = 'aa'
    expect(findNaughtyStep(original, modified)).toBe('a')
})
