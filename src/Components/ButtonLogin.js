import React, { Component } from 'react';
import { Redirect } from 'react-router';

class BtnLogin extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () =>{
        if(this.state.redirect) {
            return <Redirect to='/Dashboard'/>
        }
    }
    render(){
        return(
<div>
    {this.renderRedirect()}
    <button className="btn-login btn" onClick={this.setRedirect}>Login</button>
</div>
        )
    }
}

export default BtnLogin;