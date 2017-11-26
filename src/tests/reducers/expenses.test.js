import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})


test('should not remove expense if wrong id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add an expense', () => {
    const newExpense = {
            id: '123',
            description: 'Alpha',
            note: '',
            amount: 221,
            createdAt: 10010
        }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, newExpense])
})

test('should update an expense', () => {
    const newExpense = {
            id: '3',
            description: 'Alpha',
            note: '',
            amount: 221,
            createdAt: 10010
        }
    const action = {
        type: 'EDIT_EXPENSE',
        id: newExpense.id,
        updates: newExpense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], newExpense])
})


test('should not edit expense if wrong id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 777
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})
