import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h2>Heading</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)
export default Header