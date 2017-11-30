import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})    


test('should raise an error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });

   // console.log(wrapper.debug())
    
    expect(wrapper.state('message').length).toBeGreaterThan(20); // 'Add both description AND amount'
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Should set description on input changes', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm  />)
    wrapper.find('input').at(0).simulate('change', {
        target: {value }
    })
    expect(wrapper.state('description')).toBe(value)
})    

test('Should set note on input changes', () => {
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm  />)
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value }
    })
    expect(wrapper.state('note')).toBe(value)
})    

test('Should set amount on valid input', () => {
    const value = '22.50'
    const wrapper = shallow(<ExpenseForm  />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value }
    })
    expect(wrapper.state('amount')).toBe(value)
})    

test('Should set amount on invalid input', () => {
    const value = '22.5550'
    const wrapper = shallow(<ExpenseForm  />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value }
    })
    expect(wrapper.state('amount')).toBe('')
})    

test('Should call onSubmit', () => {
    const onSubmitSpy = jest.fn()
    onSubmitSpy('Ian', 'London')
    expect(onSubmitSpy).toHaveBeenCalledWith('Ian', 'London')
})  


test('Should call onSubmit for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm  expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
      });
  expect(wrapper.state('message')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})  

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)

})

test('should set calendr focused', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})