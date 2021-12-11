import CountUp from "../../CountUp/CountUp";
import { SkillItemContainer, ItemLine, ItemLineFilled, ItemPercentageBox } from './SkillItem.styles';

export interface SkillItemI {
  title: string;
  percentage: number;
}

const SkillItem: React.FC<SkillItemI> = ({title, percentage}) => {
  const countData = {
    start: 0,
    end: percentage,
    duration: 3
  }

  return (
    <SkillItemContainer>
      <h3>{title}</h3>
      <ItemLine>
        <ItemLineFilled percentage={CountUp(countData)}>
          <ItemPercentageBox>
            {`${CountUp(countData)}%`}
          </ItemPercentageBox>
        </ItemLineFilled>
      </ItemLine>
    </SkillItemContainer>
  );
};

export default SkillItem;