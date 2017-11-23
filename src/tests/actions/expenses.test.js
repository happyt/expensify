import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up removeExpense action object', () => {
    const action = removeExpense("123456A")
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123456A"
    })
})

test('should set up editExpense action object', () => {
    const action = editExpense("123456", { name: "New name value" })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "123456",
        updates: {
            name: "New name value"
        }
    })
})

test('should set up addExpense action object with values', () => {
    const expenseData = {
        description: "rental",
        amount: 12345,
        createdAt: 123456789,
        note: "New expense"
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
test('should set up addExpense action object with default values', () => {
    const expenseData = {
        description: "",
        amount: 0,
        createdAt: 0,
        note: ""
    }
    const action = addExpense({})
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up addExpense action with NO object', () => {
    const expenseData = {
        description: "",
        amount: 0,
        createdAt: 0,
        note: ""
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
