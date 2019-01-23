import React from 'react';
import './Social.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'

const TwitterShareButton = ({action, disabled, children, solid}) =>
  <button
    className={solid ? 'Social SocialButton Twitter Solid' : 'Social SocialButton Twitter'}
    type="button"
    disabled={disabled}
    onClick={action}
  >
    <FontAwesomeIcon icon={faTwitter} /> TWEET
  </button>

export default TwitterShareButton;