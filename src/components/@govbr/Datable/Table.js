import React, {Component} from 'react'
class Table extends Component {

    render(){
      return (
        <div className="responsive">
          <table>
            {this.props.children}
          </table>
        </div>
      )
    }
}

export default Table