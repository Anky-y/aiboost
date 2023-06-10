import '../css/Calendly.css';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div>
      <div id="calendly">
        <InlineWidget
          url="https://calendly.com/aiboost/30min"
          styles={{
            height: '800px',
          }}
        />
      </div>
    </div>
  );
};

export default Calendly;
