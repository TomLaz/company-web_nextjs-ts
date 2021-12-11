import { useEffect, useState } from 'react';

export interface CountUpI {
  start: number;
  end: number;
  duration: number;
}

const CountUp = ({ start, end, duration }: CountUpI) => {
  const [counter, setCounter] = useState( start );

  const miliseconds = duration * 1000;

  const count = () => {
    setTimeout(() => {
      let newCount;

      setCounter(( beforeCount: number ) => {
        newCount = beforeCount + 1;
        return newCount;
      });

      if ( newCount === end ) {
        return;
      } else {
        count();
      }
    }, miliseconds / ( end - start ));
  };

  useEffect(() => {
    count();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return counter;
};

export default CountUp;