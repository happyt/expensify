import { setTextFilter, setStartDate, setEndDate, sortBy } from '../../actions/filters'
import moment from 'moment'

test('should set up setStartDate filter object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should set up setEndDate filter object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should set up setTextFilter filter object', () => {
    const action = setTextFilter("abc")
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: "abc"
    })
})

test('should set up setTextFilter filter default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: ""
    })
})
test('should set up sortBy filter', () => {
    const action = sortBy("abc")
    expect(action).toEqual({
        type: 'SORT_BY',
        value: "abc"
    })
})

test('should set up setTextFilter filter default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: ""
    })
})
test('should set up sortBy filter', () => {
    const action = sortBy("abc")
    expect(action).toEqual({
        type: 'SORT_BY',
        value: "abc"
    })
})

test('should set up setTextFilter filter default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: ""
    })
})
test('should set up sortBy filter default', () => {
    const action = sortBy()
    expect(action).toEqual({
        type: 'SORT_BY',
        value: "date"
    })
})
