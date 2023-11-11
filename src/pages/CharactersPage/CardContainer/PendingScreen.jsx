import loader from '../../../images/mainSpinner.gif';
const PendingScreen = () => {
  return (
    <div style={styles.container} className="container">
      <img style={styles.image} src={loader} alt="spinner"  />
    </div>
  );
};

export default PendingScreen;

const styles = {
  container: {
    display: 'grid',
    justifyItems: "center",
    alignItems: "center",
    zIndex: 50,
    backgroundColor: '#ffffff3b',
    pointerEvent: 'none',
    overflow: 'hidden',
    position: 'absolute',
    botom: 0,
    height: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: "20px",
  },

  image: {
    filter: 'opacity(0.8)',
    height: '400px',
    width: 'auto'
   
  },
};
