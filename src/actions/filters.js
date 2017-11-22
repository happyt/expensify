// SET TEXT FILTER
export const setTextFilter = (filter) => ({
    type: 'SET_TEXT_FILTER',
    filter
})
// SORT BY DATE
export const sortByDate = () => ({
    type: 'SORT_BY',
    value: 'date'
})
// SORT BY AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY',
    value: 'amount'
})
// SET START DATE
export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
// SET END DATE
export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})