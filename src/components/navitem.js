import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navitem extends Component {

  constructor(props) {
    super(props);
    this.state= {
      'NavItemActive': ''
    }
  }

  render() {
    return (
      <li>
      <Link to={this.props.tolink} >
      {this.props.item}
      </Link>
      </li>
    )
  }
}

export default Navitem
