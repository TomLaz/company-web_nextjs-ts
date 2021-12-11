import styled from 'styled-components';

export const SkillItemContainer = styled.section`
  width: 100%;

  h3 {
    font-size: var(--size-4);
  }
`;

export const ItemLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-primary-100);
  position: relative;
`;

export const ItemLineFilled = styled.div<any>`
  width: ${( props ): any => `${props.percentage}%`};
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--color-grey-800);
  height: 2px;
  transition: width 0.1s linear;
`;

export const ItemPercentageBox = styled.span`
  position: absolute;
  right: 0;
  top: -12px;
  padding: 7px 10px;
  background-color: var(--color-grey-150);
  color: var(--color-primary-10);
  display: inline-block;
  font-size: 13px;
`;