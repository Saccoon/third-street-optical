import React, { Component } from 'react'
import styled from 'styled-components'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/fontawesome-free-solid'
import SmallLogo from "../logo/SmallLogo"
 
class Marker extends Component {

  constructor(props) {
    super(props)

    this.state = {
		show: false
    }
  }

  togglePopup = () => {
	  this.setState(prevState => ({
		  show: !prevState.show
	  }))
  }
 
  render() {
	const { show } = this.state
	
	const Marker = styled.div`
		
	`
	const Text = styled.div`
		font-size: 20pt;
		color: #EAC044;
		cursor: pointer;
		&:hover {
			color: #bf9d38;
		}
	`
	const Popup = styled.div`
		padding: 20px;
		background: #F7F6F6;
		color: #5B6FA8;
		border-radius: 20px;
		position: absolute;
		width: 320px;
		bottom: 0;
	`
    return (
      <Marker>
		<Text>
			<FontAwesomeIcon onClick={this.togglePopup} icon={faMapMarker} />
		</Text>
		{ show 
			&& <Popup>
				<SmallLogo />
				<h2>Address:</h2>
				<p>2615 Park Ave b6, Minneapolis, MN 55407</p>
				<h2>Hours:</h2>
				<ul>
					<li>Sunday - Closed</li>
					<li>Monday - Closed</li>
					<li>Tuesday - Closed</li>
					<li>Wednesday - Closed</li>
					<li>Thursday - Closed</li>
					<li>Friday - Closed</li>
					<li>Saturday - 8am to 3pm</li>
				</ul>
				<h2>Phone:</h2>
				<p>(612) 879-2615</p>
			</Popup>
		}
      </Marker>
    )
  }
}
 
export default Marker