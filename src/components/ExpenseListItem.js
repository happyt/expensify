import React from 'react'

const ExpenseListItem = ({ description, amount, createdAt}) => (
    <div>
        <div>{description}</div>
        <p>{amount} - {createdAt}</p>
    </div>
)
export default ExpenseListItem

