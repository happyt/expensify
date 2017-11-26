import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

const ExpenseSummary = (props) => (
    <div>
        <p>Viewing {props.expenses.length} expense{props.expenses.length > 1? 's totalling ' : ' value '}  
        {numeral(getExpensesTotal(props.expenses)/100).format('£0,0.00')}
         
         </p>
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)
