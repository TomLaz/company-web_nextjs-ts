import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { filteredGalleryImages, ImageDataI, LatestNewsOptions } from '../LatestNews/LatestNews.data';
import { DescriptionText, DescriptionTitle, ImageBoxContainer, ImageDescription } from './ImageBox.styles';

export interface ImageBoxI {
  imageData: ImageDataI;
}

const ImageBox: React.FC<ImageBoxI> = ({ imageData: { src, title } }) => {
  const [categories, setCategories] = useState<string[]>( [] );

  useEffect(() => {
    const categ: string[] = [];

    Object.keys( filteredGalleryImages ).forEach( imgType => {
      filteredGalleryImages[imgType as LatestNewsOptions].forEach( sub => {
        if ( sub.src === src ) {
          categ.push( imgType );
        }
      });
    });

    setCategories( categ );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <ImageBoxContainer>
      <Image
        layout='responsive'
        quality='50'
        height='100%'
        width='100%'
        src={`/images/latests/${src}.png`}
        alt={title} />
      <ImageDescription className='image-description'>
        <DescriptionTitle>
          {title}
        </DescriptionTitle>
        <DescriptionText>
          {categories.join( ', ' )}
        </DescriptionText>
      </ImageDescription>
    </ImageBoxContainer>
  );
};

export default ImageBox;