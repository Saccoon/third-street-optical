import React, { Component } from 'react'
import {bool, string} from 'prop-types'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class ButtonLink extends Component {
  
  static propTypes = {
    /** children inside of the text area **/
    children: string.isRequired,
    /** Status text to pass in */
    route: string.isRequired,
    /** Status text to pass in */
    solid: bool,
    /** color of button **/
    color: string
  }
  
  static defaultProps = {
    solid: false,
    color: '#ff5500'
  }

  render() {
    
    const {route, solid, children, color} = this.props
    
    const ButtonLink = styled(Link)`
      background: ${solid ? color : 'none'};
      color: ${solid ? 'white' : color};
      border: ${color} 1px solid;
      border-radius: 5px;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 15px;
      text-decoration: none;
      &:hover {
        background: ${solid ? 'white' : color};
        color: ${solid ? color : 'white'};
        border: ${color} 1px solid;
      }
    `;
    
    return (
      <ButtonLink
        to={route}
      >
        {children}
      </ButtonLink>
    );
  }
};

export default ButtonLink;