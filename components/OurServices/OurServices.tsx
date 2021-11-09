import type { NextPage } from 'next';
import styles from './OurServices.module.css';
import Image from 'next/image';
import WebDesign from '../../assets/svg/WebDesign';
import { useState } from 'react';
import BrandingDesign from '../../assets/svg/BrandingDesign';
import VideoProduction from '../../assets/svg/VideoProduction';
import Marketing from '../../assets/svg/Marketing';
import Development from '../../assets/svg/Development';
import Photography from '../../assets/svg/Photography';

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
    <section
      id='item3'
      className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              src='/images/our-services.png'
              alt='our services' />
            <div className={styles.imageOverlay}>
              <div className={styles.imageText}>
                <h2>{activeItem}</h2>
                <p>Tempora, nisi saepe. Sit amet consectetur adipisicing elit. A labore quaerat neque dolores. Perspiciatis pariatur blanditiis esse, amet dicta praesentium luo dapibus mapio. </p>
              </div>
            </div>
          </div>
          <div className={styles.optionsBox}>
            <div
              className={
                activeItem === ServicesOptions.BrandingDesign ?
                `${styles.optionItem} ${styles.optionItemSelected}` :
                styles.optionItem
              }
              onClick={() => setActiveItem(ServicesOptions.BrandingDesign)}
            >
              <BrandingDesign />
              <p>BRANDING DESIGN</p>
            </div>
            <div
              className={
                activeItem === ServicesOptions.WebDesign ?
                `${styles.optionItem} ${styles.optionItemSelected}` :
                styles.optionItem
              }
              onClick={() => setActiveItem(ServicesOptions.WebDesign)}
            >
              <WebDesign />
              <p>WEB DESIGN</p>
            </div>
            <div
              className={
                activeItem === ServicesOptions.VideoProduction ?
                `${styles.optionItem} ${styles.optionItemSelected}` :
                styles.optionItem
              }
              onClick={() => setActiveItem(ServicesOptions.VideoProduction)}
            >
              <VideoProduction />
              <p>VIDEO PRODUCTION</p>
            </div>
            <div
              className={
                activeItem === ServicesOptions.Photography ?
                `${styles.optionItem} ${styles.optionItemSelected}` :
                styles.optionItem
              }
              onClick={() => setActiveItem(ServicesOptions.Photography)}
            >
              <Photography />
              <p>PHOTOGRAPHY</p>
            </div>
            <div
              className={
                activeItem === ServicesOptions.Marketing ?
                `${styles.optionItem} ${styles.optionItemSelected}` :
                styles.optionItem
              }
              onClick={() => setActiveItem(ServicesOptions.Marketing)}
            >
              <Marketing />
              <p>MARKETING</p>
            </div>
            <div
              className={
                activeItem === ServicesOptions.Development ?
                `${styles.optionItem} ${styles.optionItemSelected}` :
                styles.optionItem
              }
              onClick={() => setActiveItem(ServicesOptions.Development)}
            >
              <Development />
              <p>DEVELOPMENT</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default OurServices;