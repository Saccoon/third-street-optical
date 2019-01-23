import React, { Component } from 'react'
import {string, node} from 'prop-types'
import styled from 'styled-components'
import Shade from '../shade/Shade'
import Container from '../container/Container'

class Hero extends Component {

  static propTypes = {
    /** image to put in the background of the hero **/
    image: string.isRequired,
    /** title of the hero */
    title: node,
    /** Status text to pass in */
	children: node,
	/** color of background */
	color: string
  }

  static defaultProps = {
	  color: "91,111,168,"
  }

  render() {

    const {image, title, children, color} = this.props

	const Hero = styled.figure`
      background-color: #F7F6F6;
      background-image: url(${image});
      color: #F7F6F6;
	  width: 100%;
      margin: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
	  text-align: center;
    `
	
	const Height = styled.div`
	  height: 100vh;
	  align-items: center;
	  display: grid;
	  justify-content: center;
	`

    return (
      <Hero>
        <Shade rgb={color}>
			<Shade rgb={color}>
				<Height>
					<Container>
						{title && title}
						{children}
					</Container>
				</Height>
			</Shade>
        </Shade>
      </Hero>
    )
  }
}

export default Hero
