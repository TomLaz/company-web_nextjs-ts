import type { NextPage } from 'next';
import Image from 'next/image';
import WebDesign from '../../assets/svg/WebDesign';
import { useState } from 'react';
import BrandingDesign from '../../assets/svg/BrandingDesign';
import VideoProduction from '../../assets/svg/VideoProduction';
import Marketing from '../../assets/svg/Marketing';
import Development from '../../assets/svg/Development';
import Photography from '../../assets/svg/Photography';
import { OurServicesContainer, OurServicesWrapper, OurServicesImage,
  OurServicesImageOverlay, OurServicesImageText, OurServicesOptionsBox, OurServicesOptionItem } from './OurServices.styles';

enum ServicesOptions {
  BrandingDesign = 'BRANDING DESIGN',
  WebDesign = 'WEB DESIGN',
  VideoProduction = 'VIDEO PRODUCTION',
  Marketing = 'MARKETING',
  Development = 'DEVELOPMENT',
  Photography = 'PHOTOGRAPHY'
}

const OurServices: NextPage = () => {
  const [activeItem, setActiveItem] = useState( ServicesOptions.BrandingDesign );

  return (
    <OurServicesContainer
      id='item3'
      data-aos='fade-up'>
        <OurServicesWrapper>
          <OurServicesImage>
            <Image
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              src='/images/our-services.png'
              alt='our services' />
            <OurServicesImageOverlay>
              <OurServicesImageText>
                <h2>{activeItem}</h2>
                <p>Tempora, nisi saepe. Sit amet consectetur adipisicing elit. A labore quaerat neque dolores. Perspiciatis pariatur blanditiis esse, amet dicta praesentium luo dapibus mapio. </p>
              </OurServicesImageText>
            </OurServicesImageOverlay>
          </OurServicesImage>
          <OurServicesOptionsBox className='our-services-options-box'>
            <OurServicesOptionItem
              active={activeItem === ServicesOptions.BrandingDesign}
              onClick={() => setActiveItem(ServicesOptions.BrandingDesign)}
            >
              <BrandingDesign />
              <p>BRAND</p>
            </OurServicesOptionItem>
            <OurServicesOptionItem
              active={activeItem === ServicesOptions.WebDesign}
              onClick={() => setActiveItem(ServicesOptions.WebDesign)}
            >
              <WebDesign />
              <p>WEB DESIGN</p>
            </OurServicesOptionItem>
            <OurServicesOptionItem
              active={activeItem === ServicesOptions.VideoProduction}
              onClick={() => setActiveItem(ServicesOptions.VideoProduction)}
            >
              <VideoProduction />
              <p>VIDEO</p>
            </OurServicesOptionItem>
            <OurServicesOptionItem
              active={activeItem === ServicesOptions.Photography}
              onClick={() => setActiveItem(ServicesOptions.Photography)}
            >
              <Photography />
              <p>PHOTOGRAPHY</p>
            </OurServicesOptionItem>
            <OurServicesOptionItem
              active={activeItem === ServicesOptions.Marketing}
              onClick={() => setActiveItem(ServicesOptions.Marketing)}
            >
              <Marketing />
              <p>MARKETING</p>
            </OurServicesOptionItem>
            <OurServicesOptionItem
              active={activeItem === ServicesOptions.Development}
              onClick={() => setActiveItem(ServicesOptions.Development)}
            >
              <Development />
              <p>DEVELOPMENT</p>
            </OurServicesOptionItem>
          </OurServicesOptionsBox>
        </OurServicesWrapper>
    </OurServicesContainer>
  );
};

export default OurServices;