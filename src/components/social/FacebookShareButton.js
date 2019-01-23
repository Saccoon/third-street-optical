import React from 'react';
import './Social.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/fontawesome-free-brands'

const FacebookShareButton = ({action, disabled, children, solid}) =>
  <button
    className={solid ? 'Social SocialButton Facebook Solid' : 'Social SocialButton Facebook'}
    type="button"
    disabled={disabled}
    onClick={action}
  >
    <FontAwesomeIcon icon={faFacebookF} /> SHARE
  </button>

export default FacebookShareButton;