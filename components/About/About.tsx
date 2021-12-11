import Image from 'next/image';
import { AboutContainer, AboutImage, AboutReadMoreBox, AboutReadMoreText, AboutText, AboutTextDescription, AboutTextTitle, AboutWrapper } from './About.styles';

const About: React.FC = () => {
  return (
    <AboutContainer
      id='item2'
      data-aos='fade-up'>
      <AboutWrapper>
        <AboutImage>
          <Image
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            src='/images/teamwork.png'
            alt='Teamwork' />
        </AboutImage>
        <AboutText>
          <AboutTextTitle>ABOUT COMPANY</AboutTextTitle>
          <AboutTextDescription>Beatae sunt nulla ipsam veritatis mollitia odio rem recusandae totam quam, quis id, cum atque, quisquam ab iste blanditiis nobis sapiente soluta eligendi deserunt. Obcaecati similique laudantium possimus quae quis cumque velit! Voluptatem alias nostrum odio odit iste omnis, non facilis enim nesciunt, rerum magnam? Placeat aut nesciunt impedit in, deleniti est suscipit eos, ratione quod sit, alias consequuntur.</AboutTextDescription>
          <AboutReadMoreBox>
            <AboutReadMoreText>READ MORE</AboutReadMoreText>
          </AboutReadMoreBox>
        </AboutText>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;