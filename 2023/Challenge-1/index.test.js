const findFirstRepeated = require('./index')


test(`expect to be 3`, ()=>{
    const giftIds  = [2, 1, 3, 5, 3, 2]
    expect(findFirstRepeated(giftIds)).toBe(3)
})


test('expect -1', ()=>{
    const giftIds = [1, 2, 3, 4]
    expect(findFirstRepeated(giftIds)).toBe(-1)
})

test('expect 5', ()=>{
    const giftIds = [5, 1, 5, 1]
    expect(findFirstRepeated(giftIds)).toBe(5)
})
