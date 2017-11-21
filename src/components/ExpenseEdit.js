import React from 'react'

const ExpenseEdit = (props) => {
    console.log(props)
    
    return (
        <div>Edit entry {props.match.params.id}</div>
    )
}
export default ExpenseEdit