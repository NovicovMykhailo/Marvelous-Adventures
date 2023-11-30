import shield from '../../images/shield.png';

const SuccessToast = ()=> {
  return (
    <div style={styles.toastFlex}>
      <img style={styles.toastImg} src={shield} alt="icon" />
      <p style={styles.toastText}>I can do this all day</p>
      
    </div>
  );
};

export default SuccessToast;

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
  toastImg: { width: '70px', transform: 'scaleX(-1)', filter: 'drop-shadow( 0px 0px 0.75rem  rgb(128, 128, 128))' },
};

