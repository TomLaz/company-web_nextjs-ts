import type { NextPage } from 'next';
import Image from 'next/image';
import { OurTeamBox, OurTeamCard, OurTeamCards, OurTeamContainer } from './OurTeam.styles';

const OurTeam: NextPage = () => {
  return (
    <OurTeamContainer
      id='item5'
      data-aos='fade-up'>
      <OurTeamBox>
        <h2>MEET OUR CREATIVE TEAM</h2>
        <OurTeamCards>
          <OurTeamCard>
            <Image
              layout="responsive"
              width='428'
              height='641'
              src='/images/cards/01.jpg'
              alt='Member Tony Davis' />
            <ul className="icons">
              <li>
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              </li>
              <li>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </li>
            </ul>
            <p>Tony Davis <span>Developer</span></p>
          </OurTeamCard>
          <OurTeamCard>
              <Image
                layout="responsive"
                width='428'
                height='641'
                src='/images/cards/02.jpg'
                alt='Member Don Snyder' />
              <ul className="icons">
                <li>
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </li>
              </ul>
              <p>Don Snyder <span>Designer</span></p>
          </OurTeamCard>
          <OurTeamCard>
            <Image
              layout="responsive"
              width='428'
              height='641'
              src='/images/cards/03.jpg'
              alt='Member Paul Wilson' />
            <ul className="icons">
              <li>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </li>
            </ul>
            <p>Paul Wilson <span>Marketing</span></p>
          </OurTeamCard>
        </OurTeamCards>
      </OurTeamBox>
    </OurTeamContainer>
  );
};

export default OurTeam;