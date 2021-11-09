import type { NextPage } from 'next';
import styles from './Presentation.module.css';
import Image from 'next/image';

const Presentation: NextPage = () => {
  return (
    <section
      id='item1'
      className={styles.container}>
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          src='/images/presentation-img.jpg'
          alt='Presentation' />
        <div className={styles.textWrapper}>
          <p className={styles.textTitle}>THE DESIGN COMPANY</p>
          <p className={styles.textDescription}>{'Creative Digital & Marketing Agency'}</p>
        </div>
    </section>
  );
};

export default Presentation;