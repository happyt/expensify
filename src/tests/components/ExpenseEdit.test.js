import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseForm } from '../../components/ExpenseForm';
import { ExpenseEdit } from '../../components/ExpenseEdit';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <ExpenseEdit 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history}
            expense={expenses[2]}
         />)
  })

test('should render ExpenseEdit page', () => {
    expect(wrapper).toMatchSnapshot()
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id)
});
