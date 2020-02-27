import React, { Component } from 'react';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

class Autenticacion extends Component{
    constructor(){
        super();
        state={
          redirectToReferrer: false
        }
    }

    
    login = () => {
        fakeAuth.authenticate(() => {
          this.setState(() => ({
          redirectToReferrer: true
          }))
        })
      }

    render(){
        const {from} = this.props.location.state || {from: {pathname: './Dashboard'}};
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer === true) {
        return <Redirect to={from} />
    }
        return(
          <div></div>
        )
    }
}

export default Autenticacion;