import React, { Component } from 'react'
import styled from 'styled-components'

class SmallLogo extends Component {

  render() {

    const Flex = styled.div`
	  display: flex;
	  justify-content: center;
	  height: 87px;
	`
	const Left = styled.h1`
	  font-size: 45pt;
	  margin: 0;
	`
	const Right = styled.h1`
	  font-family: Valentine;
	  font-size: 20pt;
	  line-height: 74pt;
	  margin: 0 0 0 5px;
	`

    return (
		<Flex>
			<Left>26</Left>
			<Right>Park Barber</Right>
		</Flex>
    )
  }
}

export default SmallLogo
