const basics = require('./basics');

describe('Basic testler', ()=>{
    describe('basic', ()=> {
        it('[1] tests basic matchers', ()=> {
            expect(5).toBe(5)
            expect(5).toBe(3+2)
            expect(5).not.toBe(7)
            expect(5).toBeDefined()
            expect(5).toBeGreaterThan(2)
        })
        test('[2] tests objects', ()=> {
            const object1 = {a:1}
            const object2 = {a:1}
            const object3 = object1
            const object4 = {a:1,b:2}
            expect(object1).toBe(object1)
            expect(object1).toEqual(object2)
            expect(object3).toBe(object1)
            expect(object4).toMatchObject(object1)
            expect(object1).toHaveProperty('a', 1)
            expect(object1.a).toBe(1)
        })  
    })
})

describe('Unit testler', ()=>{
    describe('Sum Function', ()=> {
        it('[3] tests basic matchers', ()=> {
            const expectedValue = 10
            const actualValue = basics.sum(7,3)
            expect(actualValue).toBe(expectedValue)
        })
        it.todo('yeni tesleri yaz');
    })
    describe('Async Function', ()=> {
        it('[4] returns correct value', async ()=> {
            const expectedValue = "bar"
            const actualValue = await basics.foo()
            expect(actualValue).toBe(expectedValue)
        })
        it('[4] returns correct string', async ()=> {
            const expectedValue = "bar"
            const actualValue = await basics.foo()
            expect(actualValue).toHaveLength(3)
            expect(actualValue).toMatch(/ba/)
        })
    })
})