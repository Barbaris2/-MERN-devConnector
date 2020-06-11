import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
  const [formDate, setFormDate] = useState({
    email: '',
    password:''
  })

  const { email, password } = formDate

  const onChange = e => 
    setFormDate({...formDate, [e.target.name]: e.target.value})

  const onSubmit = async e => {
    e.preventDefault()
    login(email, password)
  }

  if(isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sigh In</h1>
      <p className="lead">
        <i className="fa fa-user" /> Sigh Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email address" 
            onChange={e => onChange(e)}
            name="email" 
            value={email}  
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="password"  
            placeholder="Password"
            name="password" 
            value={password}
            onChange={e => onChange(e)}
            minLength='6' 
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps, 
  { login }
)(Login)
