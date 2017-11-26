export default (expensesArray) => {
    // assume is array
        if (expensesArray.length === 0) {
            return 0
        } else if (expensesArray.length === 1) {
            return expensesArray[0].amount
        } else {
            let total = expensesArray.reduce((sum, expense) => {
                return sum + expense.amount
            }, 0)
            return total
        }

    // if (Array.isArray(expensesArray.Array)) {
    
}
