import React from 'react';
import { FooterWrapper, FooterLogo, FooterInfo } from './FooterStyle';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo />
      <FooterInfo>
        Copyright © 2021 Yichen Liu All rights reserved
      </FooterInfo>
    </FooterWrapper>
  )
}

export default Footer;