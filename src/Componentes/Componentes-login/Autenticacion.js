import React, { Component } from 'react';
import users from '../users.json';

const users = users.users.map((users) => {
  return (
    console.log(users.cn)
  )
})

class Autenticacion extends Component {
  constructor() {
    super();
    state = {
      redirectToReferrer: false
    }
  }


  login = () => {
    users.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: './Dashboard' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    return (
      <div></div>
    )
  }
}

export default Autenticacion;