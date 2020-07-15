import React, { Component } from 'react'
import {string, node, array} from 'prop-types'
import styled from 'styled-components'
import Shade from '../shade/Shade'
import Container from '../container/Container'

class Hero extends Component {

  static propTypes = {
    /** image to put in the background of the hero **/
    images: array.isRequired,
    /** title of the hero */
    title: node,
    /** Status text to pass in */
	children: node,
	/** color of background */
	color: string
  }

  static defaultProps = {
	color: "0,0,0,"
  }

  constructor(props) {
	super(props)
	
	this.state = {
		currentImage: props.images[0],
		currentImageCount: 0
	}
  }

  componentWillMount = () => {
	this.imageSwitcher()
  }

  imageSwitcher = () => {
	const { images } = this.props
	const { currentImageCount } = this.state
	const maxImageCount = images.length - 1
	this.setState(prevState => ({
		currentImage: images[currentImageCount],
		currentImageCount: prevState.currentImageCount + 1
	}))
	if (currentImageCount === maxImageCount) {
		this.setState({
			currentImageCount: 0
		})
	}
	setTimeout(() =>{ 
		if (images.length > 1) {
			this.imageSwitcher()
		}
	}, 4000)
  }

  render() {

	const { title, children, color } = this.props
	const { currentImage } = this.state

	const Hero = styled.figure`
      background-color: #F7F6F6;
      background-image: url(${currentImage});
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
