// React \\
import React, { Component } from 'react'

// Styled Components \\
import styled, {keyframes} from 'styled-components'

// Components \\
import Hero from '../../components/hero/Hero'
import Map from '../../components/map/Map'
import ContactForm from "./ContactForm"
import Logo from '../../components/logo/Logo'
import SmallLogo from "../../components/logo/SmallLogo"

// Assets \\
import Background1 from './Background_1.jpeg'
import Background2 from './Background_2.jpg'
import Background3 from './Background_3.jpeg'
import Background4 from './Background_4.jpg'

class HomePage extends Component {

	constructor(props) {
		super(props)
		this.state = { popup: true }
	}

	scrollTo = screens => {
		window.scrollTo({
			top: screens * window.innerHeight,
			behavior: 'smooth',
		})
	}

  render() {

	const { popup } = this.state

    const HomePage = styled.section`
	`
	
	const Content = styled.div`
		@media only screen and (min-width: 1024px) {
			height: 100vh;
		}
		width: 100%;
	`

	const Grid = styled.div`
		display: grid;
		grid-template-columns: 100%;
		@media only screen and (min-width: 1024px) {
			height: 100%;
			grid-template-columns: 35% 65%;
		}
	`

	const EnlargeText = keyframes`
		from {
			font-size: 16pt;
		}
		to {
			font-size: 20pt;
			background: rgba(234, 192, 68, .3);
		}
	`

	const ShrinkText = keyframes`
		from {
			font-size: 20pt;
		}
		to {
			font-size: 16pt;
		}
	`
	
	const NavList = styled.ul`
		list-style: none;
		padding: 0;
		margin: 40px 0 0 0;
		height: 150px;
	  li {
		cursor: pointer;
		padding: 10px 0;
		font-size: 16pt;
		animation: ${ShrinkText} .4s forwards;
		&:hover {
			animation: ${EnlargeText} .4s forwards;
		}
	  }
	`

	const Center = styled.div`
	  height: 100%;
	  display: grid;
	  background: #F7F6F6;
	  align-items: center;
	`

	const Information = styled.div`
	  color: #5B6FA8;
	  padding: 20px 40px;
	  p {
		margin: 10px 0 0 0;
	  }
	  h2 {
		margin: 40px 0 0 0;
	  }
	  ul {
		list-style: none;
		text-align: left;
		margin: 0;
		padding: 0;
		li {
			padding: 10px 0;
			border-bottom: 1px solid gray;
			&:last-child {
				border: none;
			}
		}
	  }
	  a {
		color: #5B6FA8;
		margin: 10px 0 0 0;
		display: block;
		&:hover {
			color: rgba(234, 192, 68);
		}
	  }
	`

	const Padding = styled.div`
	  padding: 20px 0 0 0;
	`

	const Covid19 = styled.div`
	  position: fixed;
	  height: 100%;
	  width: 100%;
	  top: 0;
	  left: 0;
	  background: rgba(0,0,0,.5);
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  z-index: 5;
	`

	const Info = styled.div`
		position: relative;
	  width: 768px;
	  background: rgba(255,255,255,.85);
	  border-radius: 15px;
	  padding: 40px;
	  h1 {
		  font-size: 30px;
	  }
	  p {
		  font-size: 20px;
		  line-height: 28px;
	  }
	`

	const Close = styled.div`
	  position: absolute;
	  top: 0;
	  right: 0;
	  padding: 20px;
	  font-size: 40px;
	  cursor: pointer;
	  &:hover {
		color: crimson;
	  }
	`

    return (
      <HomePage>
		{/* {popup && <Covid19>
				<Info>
					<Close onClick={() => this.setState({popup: false})}>X</Close>
					<h1>
						Covid-19 Information
					</h1>
					<p>
						The Covid-19 pandemic is affecting all our lives in many unforeseen ways. 
						Out of a sense of responsibility for the safety of our staff, customers, community 
						and family, Third Street Optical has made the difficult decision to temporarily close 
						our doors until May 4th to all patients.
					</p>
					<p>
						We will take payments over the phone and are happy to set up an appointment for 
						pickup between 11:00 am - 01:00 pm.
					</p>
					<p>
						Thank you for your patronage and understanding during this difficult time. 
						Please be safe and we will see you May 4th.
					</p>
				</Info>
			</Covid19>
  		} */}
		<Hero
          images={[Background2]}
          title={<Logo />}>
		  <NavList>
			<li onClick={() => this.scrollTo(1)}>
				Information
			</li>
			{/* <li onClick={() => this.scrollTo(2)}>
				Schedule Appointment
			</li> */}
		  </NavList>
		</Hero>
		<Content>
			<Grid>
				<Center>
					<Information>
						<SmallLogo />
						<h2>Address:</h2>
						<p>212 3rd St NW, Bemidji, MN 56601</p>
						<h2>Hours:</h2>
						<ul>
							<li>Sunday - Closed</li>
							<li>Monday - 8am to 5:00pm</li>
							<li>Tuesday - 8am to 5:00pm</li>
							<li>Wednesday - 8am to 5:00pm</li>
							<li>Thursday - 8am to 5:00pm</li>
							<li>Friday - 8am to 5:00pm</li>
							<li>Saturday - Closed</li>
						</ul>
						<h2>Phone:</h2>
						<a href="tel:+12187518313">(218) 751-8313</a>
						<h2>Email:</h2>
						<a href="mailto:thirdsto@paulbunyan.net">thirdsto@paulbunyan.net</a>
						<Padding>
							<div className="fb-like" data-href="https://www.facebook.com/thirdstreetoptical/" data-layout="standard" data-width="280px" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
						</Padding>
					</Information>
				</Center>
				<Map />
			</Grid>
		</Content>
		{/* <Content>
			<Hero
				images={[Background4]}
				color="143, 178, 216,"
				title={<h1>Schedule an Appointment</h1>}>
				<ContactForm />
			</Hero>
		</Content> */}
      </HomePage>
    )
  }
}

export default HomePage
