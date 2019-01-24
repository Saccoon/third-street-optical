import React, { Component } from 'react'
import styled from 'styled-components'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/fontawesome-free-solid'
 
class Marker extends Component {
 
  render() {
	
	const Marker = styled.div`
		
	`
	const Text = styled.a`
		font-size: 20pt;
		color: #EAC044;
		cursor: pointer;
		&:hover {
			color: #bf9d38;
		}
	`
    return (
      <Marker>
		<Text target="_blank" href="https://www.google.com/maps/place/Third+Street+Optical/@47.4703406,-94.8842123,17z/data=!3m1!4b1!4m5!3m4!1s0x52b82dc927a22d81:0x4a76a179f0d57f8e!8m2!3d47.4703406!4d-94.8820236">
			<FontAwesomeIcon onClick={this.togglePopup} icon={faMapMarker} />
		</Text>
      </Marker>
    )
  }
}
 
export default Marker