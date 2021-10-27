import React from 'react';
import { FooterWrapper, FooterLogo, FooterInfo } from './FooterStyle';
import Logo from '../../image/sowingLogo.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <img src={Logo} alt="logo" />
      </FooterLogo>
      <FooterInfo>
        <a href="http://google.com">Contact</a>
        <a href="http://google.com">Github</a>
      </FooterInfo>
    </FooterWrapper>
  )
}

export default Footer;