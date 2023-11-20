

const PendingScreen = () => {


  return (
    <div style={styles.container} className="container">
    </div>
  );
};

export default PendingScreen;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 50,
    pointerEvent: 'none',
    overflow: 'hidden',
    position: 'absolute',
    inset: 0,
    backgroundColor: '#00000099',
    filter: 'brightness(0.5) saturate(0.1)',
    borderRadius: '20px',
  },

  
};
