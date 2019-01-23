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
import Background from './Background.jpg'
import Left1 from './Left1.jpg'

class HomePage extends Component {

	scrollTo = screens => {
		window.scrollTo({
			top: screens * window.innerHeight,
			behavior: 'smooth',
		})
	}

  render() {

    const HomePage = styled.section`
	`
	
	const Content = styled.div`
		height: 100vh;
		width: 100%;
	`

	const Grid = styled.div`
		display: grid;
		grid-template-columns: 35% 65%;
		height: 100%;
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

    return (
      <HomePage>
		<Hero
          image={Background}
          title={<Logo />}>
		  <NavList>
			<li onClick={() => this.scrollTo(1)}>
				Information
			</li>
			<li onClick={() => this.scrollTo(2)}>
				Schedule Appointment
			</li>
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
							<li>Monday - 8am to 5:30pm</li>
							<li>Tuesday - 8am to 5:30pm</li>
							<li>Wednesday - 8am to 5:30pm</li>
							<li>Thursday - 8am to 5:30pm</li>
							<li>Friday - 8am to 5:30pm</li>
							<li>Saturday - Closed</li>
						</ul>
						<h2>Phone:</h2>
						<a href="tel:+12187518313">(218) 751-8313</a>
						<h2>Email:</h2>
						<a href="mailto:info@thirdstreetoptical.info">info@thirdstreetoptical.info</a>
						<Padding>
							<div class="fb-like" data-href="https://www.facebook.com/thirdstreetoptical/" data-layout="standard" data-width="280px" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
						</Padding>
					</Information>
				</Center>
				<Map />
			</Grid>
		</Content>
		<Content>
			<Hero
				image={Left1}
				color="143, 178, 216,"
				title={<h1>Schedule an Appointment</h1>}>
				<ContactForm />
			</Hero>
		</Content>
      </HomePage>
    )
  }
}

export default HomePage
