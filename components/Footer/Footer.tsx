import { useState } from 'react';
import { FooterContainer, FooterTitle, FooterDescription, FooterInputBox } from './Footer.styles';
import Facebook from '../../assets/svg/social-media/Facebook';
import Twitter from '../../assets/svg/social-media/Twitter';
import Instagram from '../../assets/svg/social-media/Instagram';
import Youtube from '../../assets/svg/social-media/Youtube';

const Footer: React.FC = () => {
  const [email, setEmail] = useState( '' );

  return (
    <FooterContainer>
      <FooterTitle>THE COMPANY</FooterTitle>
      <FooterDescription>Illo sit, doloremque veritatis, est nulla nemo recusandae maxime non? Dicta officia veniam culpa minus, a maiores laboriosam.</FooterDescription>
      <FooterInputBox>
        <label>EMAIL ADDRESS |</label>
        <input
          className='input-email'
          style={{backgroundColor: '#00000026', border: 'transparent', width: '300px', color: '#fff' }}
          value={email}
          maxLength={100}
          placeholder='Your email'
          onChange={( e ) => setEmail( e.currentTarget.value )} />
        <p style={{color: '#fff', fontWeight: 700, padding: '0 20px 0 10px', cursor: 'pointer'}}>SEND</p>
      </FooterInputBox>
      <div style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
      </div>
    </FooterContainer>
  );
};

export default Footer;