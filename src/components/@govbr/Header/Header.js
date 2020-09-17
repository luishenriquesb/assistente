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
                    <div className="menu row">
                        <div className="">{this.props.botaoMenu}</div>
                        <div className="title" style={{width:'calc(100% - 48px)'}}>
                            {this.props.titulo}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Header