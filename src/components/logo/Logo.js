import React, { Component } from 'react'
import styled from 'styled-components'
import LogoImage from "./logo.png"

class Logo extends Component {

  render() {

	const Logo = styled.figure`
		margin: 0;
		padding: 0;
		margin-bottom: 20px;
		text-align: center;
		img {
			height: 100px;
			@media only screen and (min-width: 1024px) {
				height: auto;
			}
		}
	`

    return (
		<Logo>
			<img alt="Large Logo" src={LogoImage} />
		</Logo>
    )
  }
}

export default Logo
