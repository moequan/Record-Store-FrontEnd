import React from 'react';
import { handleLogin } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });

    // if (name === 'email') this.setState({ email: e.target.value });
    // else if (name === 'password') this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
  }

  render() {
    const status = this.props.isLoggedIn;

    return (
      <>
        {!status ? (
          <div id="login" className="page thirdColor">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="row flex-revcol-left">
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  id="email"
                  required
                />
                <label for="email">Email</label>
              </div>
              <div className="row flex-revcol-left">
                <input
                  name="password"
                  type="text"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  id="password"
                  required
                />
                <label for="password">Password</label>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        ) : (
          <Redirect to="/dashboard" />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, { handleLogin })(Login);
