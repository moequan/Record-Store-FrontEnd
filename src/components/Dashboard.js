import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    const status = this.props.isLoggedIn;

    return (
      <>
        {!status ? (
          <Redirect to="/login" />
        ) : (
          <div id="dashboard" className="page thirdColor">
            <h1>Dashboard</h1>
          </div>
        )}
      </>
    );
  }
}

const mapsStateToProps = state => {
  return state;
};

export default connect(mapsStateToProps)(Dashboard);
