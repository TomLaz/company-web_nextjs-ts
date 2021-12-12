import type { NextPage } from 'next';
import Image from 'next/image';
import { PresentationContainer, PresentationTextWrapper, PresentationTextTitle, PresentationTextDescription } from './Presentation.styles';

const Presentation: NextPage = () => {
  return (
    <PresentationContainer
      data-aos='fade-up'
      id='item1'>
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          src='/images/presentation-img.jpg'
          alt='Presentation' />
        <PresentationTextWrapper>
          <PresentationTextTitle>THE DESIGN COMPANY</PresentationTextTitle>
          <PresentationTextDescription>{'Creative Digital & Marketing Agency'}</PresentationTextDescription>
        </PresentationTextWrapper>
    </PresentationContainer>
  );
};

export default Presentation;