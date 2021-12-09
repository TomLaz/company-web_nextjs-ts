import type { NextPage } from 'next';
import { useState } from 'react';
import ImageBox from '../ImageBox/ImageBox';
import { filteredGalleryImages, ImageDataI, LatestNewsOptions } from './LatestNews.data';
import { GalleryBox, GalleryItem, LatestNewsBox, LatestNewsContainer, LatestNewsGallery, LatestNewsMore } from './LatestNews.styles';

const LatestNews: NextPage = () => {
  const [categorySelected, setCategorySelected] = useState( LatestNewsOptions.All );

  return (
    <LatestNewsContainer id='item4'>
        <LatestNewsBox className='latests-news-box'>
          <h2>LATEST WORK</h2>
          <GalleryBox>
            <GalleryItem
              className={categorySelected === LatestNewsOptions.All ? 'category-selected' : ''}
              onClick={() => setCategorySelected( LatestNewsOptions.All )}>
              ALL
            </GalleryItem>
            <GalleryItem
              className={categorySelected === LatestNewsOptions.Design ? 'category-selected' : ''}
              onClick={() => setCategorySelected( LatestNewsOptions.Design )}>
              DESIGN
            </GalleryItem>
            <GalleryItem
              className={categorySelected === LatestNewsOptions.Illustrative ? 'category-selected' : ''}
              onClick={() => setCategorySelected( LatestNewsOptions.Illustrative )}>
              ILLUSTRATIVE
            </GalleryItem>
            <GalleryItem
              className={categorySelected === LatestNewsOptions.Brand ? 'category-selected' : ''}
              onClick={() => setCategorySelected( LatestNewsOptions.Brand )}>
              BRAND
            </GalleryItem>
            <GalleryItem
              className={categorySelected === LatestNewsOptions.Concept ? 'category-selected' : ''}
              onClick={() => setCategorySelected( LatestNewsOptions.Concept )}>
              CONCEPT
            </GalleryItem>
          </GalleryBox>
        </LatestNewsBox>
        <LatestNewsGallery>
          {
            filteredGalleryImages[categorySelected].map(( imageData: ImageDataI ) => (
              <ImageBox
                key={imageData.title}
                imageData={imageData} />
            ))
          }
        </LatestNewsGallery>
        <LatestNewsMore>
          {'<--VIEW MORE-->'}
        </LatestNewsMore>
    </LatestNewsContainer>
  );
};

export default LatestNews;