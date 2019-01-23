import React, { Component } from 'react'
import styled from 'styled-components'
import LogoImage from "./logo.png"

class SmallLogo extends Component {

  render() {

	const Logo = styled.figure`
		margin: 0;
		padding: 0;
		margin-bottom: 20px;
		text-align: center;
		img {
			width: 200px;
		}
	`

    return (
		<Logo>
			<img src={LogoImage} />
		</Logo>
    )
  }
}

export default SmallLogo
