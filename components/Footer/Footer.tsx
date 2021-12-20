import { useState } from 'react';
import { FooterContainer, FooterWrapper, FooterTitle,
  FooterDescription, FooterInputBox,
  FooterSocialMedia, FooterCopyright } from './Footer.styles';
import Facebook from '../../assets/svg/social-media/Facebook';
import Twitter from '../../assets/svg/social-media/Twitter';
import Instagram from '../../assets/svg/social-media/Instagram';
import Youtube from '../../assets/svg/social-media/Youtube';
import Linkedin from '../../assets/svg/social-media/Linkedin';

const Footer: React.FC = () => {
  const [email, setEmail] = useState( '' );

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTitle>THE COMPANY</FooterTitle>
        <FooterDescription>Illo sit, doloremque veritatis, est nulla nemo recusandae maxime non? Dicta officia veniam culpa minus, a maiores laboriosam.</FooterDescription>
        <FooterInputBox>
          <label>EMAIL ADDRESS |</label>
          <input
            className='input-email'
            value={email}
            maxLength={100}
            placeholder='Your email'
            onChange={( e ) => setEmail( e.currentTarget.value )} />
          <p>SEND</p>
        </FooterInputBox>
        <FooterSocialMedia>
          <Facebook />
          <Twitter />
          <Instagram />
          <Youtube />
          <Linkedin />
        </FooterSocialMedia>
      </FooterWrapper>
      <FooterCopyright>
        {'All rights reserved © [TomLaz] 2021'}
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;