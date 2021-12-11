import styled from 'styled-components';

export const OurTeamContainer = styled.section`
  width: 100%;
  text-align: center;
  background-color: var(--color-primary-10);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--color-grey-800);
    font-size: 33px;
  }

  .icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .icons li {
    list-style: none;
  }

  .icons li a {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    text-align: center;
    background: var(--color-primary-10);
    color: var(--color-primary-350);
    margin: 0 5px;
    border-radius: 50%;
    transition: 0.5s;
    transform: translateY(270px);
    opacity: 0;
  }

  .icons li a .fa {
    transition: 0.5s;
    font-size: 24px;
    line-height: 50px;
  }

  .icons li a:hover .fa {
    transform: rotateY(360deg);
  }

  @media only screen and (max-width: 980px) {
    h2 {
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 540px) {
    height: 100%;
  }

  @media only screen and (max-width: 460px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const OurTeamBox = styled.div`
  width: 80%;
  margin: 0 auto;

  h2::after {
    display: block;
    content: 'ººº';
    margin: 0;
    color: var(--color-primary-350);
    font-size: 30px;
  }

  @media (max-width: 768px) {
    margin: 10% auto;
  }
`;

export const OurTeamCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  img {
    max-width: 100%;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const OurTeamCard = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .3);
  height: 99%;
  width: 33%;

  img {
    width: 100%;
    filter: grayscale(1);
    -webkit-filter: grayscale(1);
    transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
  }

  &:hover img {
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px 10px;
    margin: 0;
    background: rgba(0, 0, 0, .55);
    width: 100%;
    text-align: left;
    color: var(--color-primary-10);
    text-transform: uppercase;
    transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
  }

  &:hover p {
    bottom: -80px;
    opacity: 0;
  }

  span {
    color: var(--color-primary-350);
    font-weight: 500;
  }

  &:hover .icons li a {
    transform: translateY(0px);
    opacity: 1;
  }

  &:hover .icons li:nth-child(1) a {
    transition-delay: 0s;
  }

  &:hover .icons li:nth-child(2) a {
    transition-delay: 0.2s;
  }

  &:hover .icons li:nth-child(3) a {
    transition-delay: 0.4s;
  }

  @media (max-width: 540px) {
    width: 100%;

    p {
      text-align: center;
    }
  }
`;