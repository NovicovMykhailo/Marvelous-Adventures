import { useEffect, useState } from 'react';
import spinner from '../../images/spiner-4-toasts.gif';

const PendingToast = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    let intervalID;
    function dotsCounter() {
      intervalID = setInterval(() => {
        if (dots.split('').length <= 2) {
          setDots(prev => (prev += '.'));
        } else {
          setDots('');
        }
      }, 600);
    }

    dotsCounter();
    return () => {
      clearInterval(intervalID);
    };
  }, [dots]);

  return (
    <div style={styles.toastFlex}>
      <img style={styles.toastImg} src={spinner} alt="icon" />
      <p style={styles.toastText}>{`Searching ${dots}`}</p>
    </div>
  );
};

export default PendingToast;

const styles = {
  toastFlex: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    gap: '40px',


  },
  toastText: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: '24px'
  },
  toastImg: { width: '60px', mixBlendMode: 'lighten' },
};
