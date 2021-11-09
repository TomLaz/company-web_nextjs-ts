import type { NextPage } from 'next';
import styles from './About.module.css';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <section
      id='item2'
      className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              src='/images/teamwork.png'
              alt='Teamwork' />
          </div>
          <div className={styles.text}>
            <h2 className={styles.textTitle}>ABOUT COMPANY</h2>
            <p className={styles.textDescription}>Beatae sunt nulla ipsam veritatis mollitia odio rem recusandae totam quam, quis id, cum atque, quisquam ab iste blanditiis nobis sapiente soluta eligendi deserunt. Obcaecati similique laudantium possimus quae quis cumque velit! Voluptatem alias nostrum odio odit iste omnis, non facilis enim nesciunt, rerum magnam? Placeat aut nesciunt impedit in, deleniti est suscipit eos, ratione quod sit, alias consequuntur.</p>
            <div className={styles.textReadMore}>
              <p className={styles.readMore}>READ MORE</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;