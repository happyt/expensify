import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return zero if no expenses', () => {

    const result = getExpensesTotal([])
    expect(result).toEqual(0)
})

test('should correctly return value of one expense', () => {


    const result = getExpensesTotal([expenses[0]])
    expect(result).toEqual(expenses[0].amount)
})

test('should return correct total of an array of expenses', () => {

    const result = getExpensesTotal(expenses)
    expect(result).toEqual(114195)
})