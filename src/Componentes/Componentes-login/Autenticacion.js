import React, { Component } from 'react';
import users from '../users.json';
import Axios from 'axios';

const users = users.users.map((users) => {
  return (
    console.log(users.name)
  )
})

class Autenticacion extends Component {
  constructor() {
    super();
    state = {
      name: '',
      password: '',
      loginErrors: '',
      redirectToReferrer: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  authLogin = () => {
    users.authenticate(() => {
      this.setState(() => ({
        name: name,
        password: password,
        redirectToReferrer: true
      }))
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const {name, password}
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

/*
auth(){
    fetch('http://localhost:3000/users',
    {
      method: 'GET',
      headers: {
        name: '',
        password: '',
        //Authorization: 'Bearer Token',
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((users) => {
    this.setState({users: users})
  })
  }

  /*authLogin() {
    axios({
      url: 'http://10.10.1.24:3000/auth/signin',
      method: 'post',
      data: JSON.stringify(cn),
      headers: {
        Authorization: 'Bearer Token',
        'Content-Type': 'application/json'
      }
    }).then(Response => {
      //
      return Response.data
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }*/
