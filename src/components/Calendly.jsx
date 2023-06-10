import '../css/Calendly.css';
import { InlineWidget } from 'react-calendly';
import { useEffect, useState } from 'react';

const Calendly = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  let width;
  if (screenWidth <= 370) {
    width = '250px';
  } else if (screenWidth <= 415) {
    width = '300px';
  } else if (screenWidth <= 475) {
    width = '350px';
  } else if (screenWidth <= 600) {
    width = '400px';
  } else {
    width = '500px';
  }
  const styles = { height: '800px', width };
  return (
    <div>
      <div id="calendly">
        <InlineWidget url="https://calendly.com/aiboost/30min" styles={styles} />
      </div>
    </div>
  );
};

export default Calendly;
