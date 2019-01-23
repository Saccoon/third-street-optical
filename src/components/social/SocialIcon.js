import React, { Component } from 'react'
import {string} from 'prop-types'
import styled from 'styled-components'
import FacebookImage from './facebook.png'
import TwitterImage from './twitter.png'
import LinkedInImage from './linkedin.png'
import GooglePlusImage from './googleplus.png'

class SocialIcon extends Component {

  static propTypes = {
    /** children inside of the text area **/
    icon: string.isRequired,
    /** url of the profile for the icon */
    url: string.isRequired
  }

  static defaultProps = {
    icon: 'facebook'
  }

  render() {

    const {icon, url} = this.props

    const SocialIcon = styled.div`
      img {
        width: 40px;
        height: 40px;
      }
    `;

    return (
      <SocialIcon>
        { icon ==='facebook'
            ? <a href={url} target="_blank">
                <img alt="Social Icon Link" src={FacebookImage} />
              </a>
            : ''
        }
        { icon ==='twitter'
            ? <a href={url} target="_blank">
                <img alt="Social Icon Link" src={TwitterImage} />
              </a>
            : ''
        }
        { icon ==='linkedin'
            ? <a href={url} target="_blank">
                <img alt="Social Icon Link" src={LinkedInImage} />
              </a>
            : ''
        }
        { icon ==='googleplus'
            ? <a href={url} target="_blank">
                <img alt="Social Icon Link" src={GooglePlusImage} />
              </a>
            : ''
        }
      </SocialIcon>
    );
  }
};

export default SocialIcon;
