import React from 'react'
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import ExpenseAdd from '../components/ExpenseAdd'
import ExpenseEdit from '../components/ExpenseEdit'
import Help from '../components/Help'
import Header from '../components/Header'
import NotFound from '../components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/create" component={ExpenseAdd} />
                <Route path="/edit/:id" component={ExpenseEdit} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter