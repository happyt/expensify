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
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET TEXT FILTER
const setTextFilter = (filter) => ({
    type: 'SET_TEXT_FILTER',
    filter
})
// SORT BY DATE
const sortByDate = () => ({
    type: 'SORT_BY',
    value: 'date'
})
// SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY',
    value: 'amount'
})
// SET START DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
// SET END DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

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
        case 'EDIT_EXPENSE':
            return state.map((exp) => {
                if (exp.id === action.id) {
                    return {
                        ...exp,
                        ...action.updates
                    }
                } else {
                    return exp
                }
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
        case 'SET_TEXT_FILTER':
            return ({
                ...state,
                text: action.filter
            })
        case 'SORT_BY':
            return ({
                ...state,
                sortBy: action.value
            })
            case 'SET_START_DATE':
            return ({
                ...state,
                startDate: action.date
            })
            case 'SET_END_DATE':
            return ({
                ...state,
                endDate: action.date
            })
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
     const textSearch = text.toLowerCase()
    return expenses.filter((exp) => {
        const startDateMatch = typeof startDate !== 'number' || exp.createdAt >= startDate 
        const endDateMatch = typeof endDate !== 'number' || exp.createdAt <= endDate 
        
        const itemDesc = exp.description && exp.description.toLowerCase(); 
        
        const textMatch = itemDesc.includes(textSearch) 

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : 0
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : 0            
        }
    })
}

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
//    console.log(store.getState())
})




const exp1 = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 125 }))
const exp2 = store.dispatch(addExpense({ description: 'coffee', amount: 123, createdAt: 225 }))
const exp3 = store.dispatch(addExpense({ description: 'coffee', amount: 270, createdAt: 325 }))
const exp4 = store.dispatch(addExpense({ description: 'food', amount: 675, createdAt: 425 }))
store.dispatch(addExpense({ description: 'coffee', amount: 111, createdAt: 525 }))
store.dispatch(addExpense({ description: 'food', amount: 222, createdAt:777 }))

// console.log('exp1.id ' + JSON.stringify(exp1))
store.dispatch(removeExpense({ id: exp1.expense.id }))

store.dispatch(editExpense(exp2.expense.id, { amount: 234 }))

// store.dispatch(setTextFilter('cof'))
store.dispatch(sortByDate())
store.dispatch(sortByAmount())

store.dispatch(setStartDate(111))
store.dispatch(setEndDate(444))
store.dispatch(setEndDate())

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