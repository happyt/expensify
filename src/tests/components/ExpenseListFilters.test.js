import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortBy, setStartDate, setEndDate, wrapper


beforeEach(() => {
    setTextFilter = jest.fn();
    sortBy = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortBy={sortBy}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    );
  });
  
  test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseListFilters with alt data correctly', () => {
      wrapper.setProps({
          filters: altFilters
      })
    expect(wrapper).toMatchSnapshot();
  });

test('should render ExpenseListFilters with alt data correctly', () => {
    
})
test('should handle text changes', () => {
        
})
test('should handle sortBy date', () => {
    
})
test('should handle sortBy amount', () => {
    
})
test('should handle date changes', () => {
    
})

test('should handle sortBy date', () => {
        
}