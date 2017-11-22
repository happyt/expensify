import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD ENTRY
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
        } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


// REMOVE ENTRY
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT ENTRY
// SET TEXT FILTER
// SORT BY DATE
// SORT BY AMOUNT
// SET START DATE
// SET END DATE


const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            console.log('Id: ' + action.id)
            return state.filter((exp) => {
                return (action.id !== exp.id)
             })
        default:
            return state
    }
}
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)
store.subscribe(() => {
    console.log(store.getState())
})

const exp1 = store.dispatch(addExpense({ description: 'rent', amount: 100 }))
const exp2 = store.dispatch(addExpense({ description: 'coffee', amount: 123 }))

// console.log('exp1.id ' + JSON.stringify(exp1))
store.dispatch(removeExpense({ id: exp1.expense.id }))


const demoState = {
    expenses: [{
        id: 'asdf',
        description: 'Work done',
        note: 'Payment for Friday',
        amount: 12300,
        createdAt: 0
    }],
    filters: {
        text: 'read',
        sortBy: 'amount',   //date or amount
        startDate: undefined,
        endDate: undefined
    }
}