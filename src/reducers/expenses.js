
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            //          console.log('Id: ' + action.id)
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
        case 'SET_EXPENSES':
        return action.expenses
        default:
            return state
    }
}