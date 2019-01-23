import React, { Component } from 'react'
import styled from 'styled-components'

class Logo extends Component {

  render() {

    const Flex = styled.div`
	  display: flex;
	  justify-content: center;
	  height: 87px;
	  margin-bottom: 20px;
	`
	const Left = styled.h1`
	  font-size: 90pt;
	  margin: 0;
	`
	const Right = styled.h1`
	  font-family: Valentine;
	  font-size: 40pt;
	  line-height: 148pt;
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

export default Logo
