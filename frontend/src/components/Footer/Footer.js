import React from 'react';
import { FooterWrapper, FooterLogo, FooterInfo } from './FooterStyle';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>I am a Logo</FooterLogo>
      <FooterInfo>
        <a href="http://google.com">Contact</a>
        <a href="http://google.com">Github</a>
      </FooterInfo>
    </FooterWrapper>
  )
}

export default Footer;