import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, startSetExpenses} from './actions/expenses'
import {setTextFilter, sortBy} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()
// console.log('test')

// store.dispatch(addExpense({ description: 'water bill', amount: 10000, createdAt: 125 }))
// store.dispatch(addExpense({ description: 'gas bill', amount: 20200, createdAt: 225 }))
// store.dispatch(addExpense({ description: 'Rent', amount: 2220, createdAt: 225 }))
// store.dispatch(addExpense({ description: 'Coffee', amount: 222, createdAt: 99 }))
// store.dispatch(addExpense({ description: 'gas bill', amount: 12345, createdAt: 335 }))

// // store.dispatch(setTextFilter('bill'))
// store.dispatch(sortBy('Amount'))

// console.log(store.getState())

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById("app"))
})

