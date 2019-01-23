import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../container/Container'
import SocialIcon from '../social/SocialIcon'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/fontawesome-free-solid'

class Footer extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  scrollTop = e => {
    e.preventDefault()
    window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
  }

	scrollTo = screens => {
		window.scrollTo({
			top: screens * window.innerHeight,
			behavior: 'smooth',
		})
	}

  render() {

    const Footer = styled.div`
      background-color: #241f20;
      padding: 10px 0;
      position: relative;
    `

    const Flex = styled.div`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    `

    const SocialList = styled.ul`
      display: flex;
      list-style: none;
      li {
        padding: 0 5px;
      }
    `

    const Links = styled.ul`
      display: flex;
      list-style: none;
      li {
		padding: 0 7px;
		font-size: 10pt;
		text-decoration: none;
		color: #F7F6F6;
		cursor: pointer;
		&:hover {
			color: #EAC044;
		}
      }
    `

    const Text = styled.p`
      color: #F7F6F6;
      font-size: 10pt;
      margin: 0;
    `

    const Top = styled.div`
      text-align: center;
      color: #F7F6F6;
      background: #231f20;
      font-size: 30pt;
      position: fixed;
      padding: 20px 23px 0px;
      border-radius: 5px;
      left: 10px;
      bottom: 10px;
      cursor: pointer;
      &:hover {
        background: white;
        color: #231f20;
      }
    `

    const Highlight = styled.span`
      color: #EAC044;
      font-size: 12pt;
    `

    return (
      <Footer>
        <Container>
          <Top onClick={this.scrollTop}>
            <FontAwesomeIcon icon={faSortUp} />
          </Top>
          <Flex>
            <SocialList>
              <li>
                <SocialIcon icon='facebook' url="https://www.facebook.com/thirdstreetoptical/?ref=br_rs"/>
              </li>
              <li>
                <SocialIcon icon='linkedin' url="https://www.linkedin.com/in/james-hess-2759773/"/>
              </li>
              <li>
                <SocialIcon icon='googleplus' url="https://www.google.com/search?q=third+street+optical&oq=third+street+optical&aqs=chrome..69i57j69i61j69i60l2j0l2.2477j0j4&sourceid=chrome&ie=UTF-8"/>
              </li>
            </SocialList>
            <Links>
              <li onClick={() => this.scrollTo(1)}>Information</li>
              <li onClick={() => this.scrollTo(2)}>Schedule Appointment</li>
            </Links>
            <Text>
              © 2019 all rights reserved <Highlight>Third Street Optical</Highlight>
            </Text>
          </Flex>
        </Container>
      </Footer>
    )
  }
}

export default Footer
