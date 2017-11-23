const add = (a,b) => a + b

test('should add', () => {
    const result = add(3,4)
    expect(result).toBe(7)
})

const generateGreeting = (name = 'Anon') => `Hello ${name}`

test ('say hello', () => {
    const reply = generateGreeting('Ian')
    expect(reply).toBe('Hello Ian')
})

test ('say hello Anon', () => {
    const reply = generateGreeting()
    expect(reply).toBe('Hello Anon')
})