import React, { Component } from 'react'
import {bool, string, func} from 'prop-types'
import styled from 'styled-components'

class Button extends Component {

  static propTypes = {
    /** children inside of the text area **/
    children: string.isRequired,
    /** Status text to pass in */
    disabled: bool,
    /** Status text to pass in */
    solid: bool,
    /** Action to take when button pressed */
    action: func.isRequired,
    /** color of button **/
    color: string
  }

  static defaultProps = {
    disabled: false,
    solid: false,
    color: '#EAC044'
  }

  render() {

    const {solid, children, disabled, action, color} = this.props

    const Button = styled.button`
      background: ${solid ? color : 'none'};
      color: ${solid ? 'white' : color};
      border: ${color} 1px solid;
      border-radius: 3px;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 15px;
      &:hover {
        background: ${solid ? 'white' : color};
        color: ${solid ? color : 'white'};
        border: ${color} 1px solid;
      }
    `

    return (
      <Button
        type="button"
        disabled={disabled}
        onClick={action}
      >
        {children}
      </Button>
    )
  }
}

export default Button
