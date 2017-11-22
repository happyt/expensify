import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <div>{description}</div>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
                dispatch(removeExpense({id}))
                console.log("Button " + id)
            }
        }
        >Remove</button>
    </div>
)

export default connect()(ExpenseListItem)
