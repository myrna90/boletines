import React, { Component } from 'react';

class ButtonMenu extends Component {
    state = {
        menu: false
    }

    setMenu = () => {
        this.setState({
            menu: true
        })
    }

    renderMenu = () => {
        if(this.state.menu){
            return console.log("si funciona el evento")
        }
    }

    render(){
        return(
            <div>
                {this.renderMenu()}
                <button className="btn-menu" onClick={this.setMenu}></button>
            </div>
        )
    }
}

export default ButtonMenu;