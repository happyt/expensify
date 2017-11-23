import uuid from 'uuid'

// ADD ENTRY
export const addExpense = (
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
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT ENTRY
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})