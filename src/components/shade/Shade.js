import React, { Component } from 'react'
import {node, string} from 'prop-types'
import styled from 'styled-components';

class Shade extends Component {

  static propTypes = {
    /** nodes to be shaded **/
	children: node.isRequired,
	rgb: string
  }

  static defaultProps = {
	rgb: "0,0,0,"
  }

  render() {

    const {children, rgb} = this.props

    const Shade = styled.div`
      background-color: rgba(${rgb}.4);
      box-shadow: inset 0px 0px 200px 4px rgba(${rgb}.65);
      width: 100%;
    `

    return (
      <Shade>
        {children}
      </Shade>
    )
  }
}

export default Shade
