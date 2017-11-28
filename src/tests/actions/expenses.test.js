import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk])

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

test('should set up addExpense action object with  provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note : 'This one is better',
        createdAt: 1234
    }
    store.dispatch(startAddExpense(expenseData))
})

test('should add expense with defults to database and store', () => {
    expect(1).toBe(2)
    done()
})

// test('should set up addExpense action object with default values', () => {
//     const expenseData = {
//         description: "",
//         amount: 0,
//         createdAt: 0,
//         note: ""
//     }
//     const action = addExpense({})
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// })

// test('should set up addExpense action with NO object', () => {
//     const expenseData = {
//         description: "",
//         amount: 0,
//         createdAt: 0,
//         note: ""
//     }
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// })
