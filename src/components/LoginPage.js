import React from 'react';
import {connect } from 'react-redux'
import { startLogin } from '../actions/auth'


const LoginPage = ({startLogin}) => (
  <div>
    Please log in
    <button onClick={startLogin}>LOG IN</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)