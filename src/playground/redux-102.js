import { createStore } from 'redux'

const store = createStore((state = { count: 0 }, action) => {
    console.log(action)
    switch (action.type) {
        case "INCREMENT":
            // const incrementBy = typeof action.incrementBy === 'number' 
            //                     ? action.incrementBy : 1
            // return {
            //     count: state.count + incrementBy
            // }

            // since we know it exists
            // doesn't work if pass string
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            // const decrementBy = typeof action.decrementBy === 'number'
            //     ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            return {
                count: action.count
            }
        default:
            return state
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// unsubscribe() to remove the connection

// Action generators - functions that return action objects
const incrementCountA = () => {
    return {
        type: 'INCREMENT'
    }
}

// so avoids typing errors

// same as 
const incrementCountB = () => ({ type: 'INCREMENT' })

// payload default is empty object
const incrementCountC = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})

store.dispatch(incrementCountC({ incrementBy: 5 }))

// destructuring object parameters
const add = ({ a, b }, c) => {
    return a + b + c
}
console.log(add({ a: 1, b: 5 }, 100))

const incrementCount = ({ incrementBy = 1 }) => ({
    type: 'INCREMENT',
    incrementBy                     // same name for value
})

store.dispatch(incrementCount({ incrementBy: 1 }))

const decrementCount = ({ decrementBy = 1 }) => ({
    type: 'DECREMENT',
    decrementBy                     // same name for value
})

// set Count
const setCount = ({ count = 1 }) => ({
    type: 'SET', 
    count              
})

store.dispatch(setCount({ count: 77 }))

// reset
const resetCount = () => ({
    type: 'RESET'     
})

store.dispatch(resetCount())

// to increment the count
store.dispatch(
    {
        type: 'INCREMENT',
        incrementBy: 3
    }
)


store.dispatch(decrementCount({ decrementBy: 2 }))
// store.dispatch(
//     {
//         type: 'DECREMENT'
//     }
// )
// store.dispatch(
//     {
//         type: 'DECREMENT',
//         decrementBy: 5
//     }
// )

store.dispatch(
    {
        type: 'RESET'
    }
)
store.dispatch(
    {
        type: 'SET',
        count: 99
    }
)
// to reset the count

console.log(store.getState())