import React, { Component } from 'react'
import BRHeader from './BRHeader'

class Header extends Component {

    componentDidMount(){
        new BRHeader('br-header', window.document.querySelector('.br-header'))
    }

    render() {
        return (
            <div className="br-header" sticky="">
            <div className="container-lg">
                <div className="flex-container">
                    <div className="menu">
                        {this.props.botaoMenu}
                        <div className="title">{this.props.titulo}</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Header