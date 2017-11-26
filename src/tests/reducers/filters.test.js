import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by AMOUNT', ()=> {
    const state = filtersReducer(undefined, { type: 'SORT_BY', value: 'amount'})
    expect(state.sortBy).toBe('amount')
})

test('should set sort by DATE', ()=> {
    const state = filtersReducer(undefined, { type: 'SORT_BY', value: 'date'})
    expect(state.sortBy).toBe('date')
})

test('should set sort by, check changes', ()=> {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'xxx'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY', value: 'date'})
    expect(state.sortBy).toBe('date')
})



test('should set text filter', ()=> {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', filter: 'golf'})
    expect(state.text).toBe('golf')
})

test('should set text filter', ()=> {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: 777})
    expect(state.startDate).toBe(777)
})

test('should set text filter', ()=> {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: 123})
    expect(state.endDate).toBe(123)
})
