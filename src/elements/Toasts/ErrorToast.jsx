import hydra from '../../images/hydra.png';

const ErrorToast = () => {
  return (
    <div style={styles.toastFlex}>
       <img style={styles.toastImg} src={hydra} alt="icon" />
      <p style={styles.toastText}>If They Cut Off One Head, Two More Shall Take Its Place.</p>
     
    </div>
  );
};

export default ErrorToast;

const styles = {
  toastFlex: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  toastText: {
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  toastImg: { width: '60px' },
};
