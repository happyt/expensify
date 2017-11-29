import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})    

test('Should render error if invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    console.log("XXX")
    console.log(wrapper.state())
    console.log("XXX")
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
   
    expect(wrapper.state('message').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()

})