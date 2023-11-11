import hulk from '../../images/hulk.png'

const InfoToast = () => {
    return (
        <div style={styles.toastFlex}>
           <img style={styles.toastImg} src={hulk} alt="icon" />
          <p style={styles.toastText}>Please, search request... Hulk! Smash! ...</p>
         
        </div>
      );
};

export default InfoToast;

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
  