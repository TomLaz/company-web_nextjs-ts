import SkillItem from './SkillItem/SkillItem';
import { SkillsContainer, SkillsWrapper, SkillBox } from './Skills.styles';

const Skills: React.FC = () => {
  return (
    <SkillsContainer
      id='item6'
      data-aos='fade-up'>
      <h2>OUR SKILLS</h2>
      <SkillsWrapper>
        <SkillBox>
          <SkillItem title='DIGITAL DESIGN' percentage={91} />
        </SkillBox>
        <SkillBox>
          <SkillItem title='BRAND DESIGN' percentage={84} />
        </SkillBox>
        <SkillBox>
          <SkillItem title='DIGITAL MARKETING' percentage={91} />
        </SkillBox>
        <SkillBox>
          <SkillItem title='WEB DEVELOPMENT' percentage={100} />
        </SkillBox>
        <SkillBox>
          <SkillItem title='INTERNET MARKETING' percentage={76} />
        </SkillBox>
        <SkillBox>
          <SkillItem title='COPY WRITING' percentage={88} />
        </SkillBox>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;