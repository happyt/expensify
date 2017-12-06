import { startAddExpense, addExpense, 
            editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach(() => {
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt}
    })
    database.ref('expenses').set(expensesData).then(() => done())
})

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
    store.dispatch(startAddExpense(expenseData)).then( () => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        // return a promise
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: '',
        amount: 0,
        note : '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then( () => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        // return a promise
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should set up set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })

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
