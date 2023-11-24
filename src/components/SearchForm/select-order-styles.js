export const orderStyles = {
    singleValue: styles => ({
      ...styles,
      color: '#FAFAFA',
      margin: 0,
    }),
    input: styles => ({ ...styles, margin: 0, padding: 0 }),
  
    control: (styles, { isSelected }) => ({
      ...styles,
      '&:hover': {
        borderColor: '#34387F',
      },
      transition: "0.2s",
  
      color: isSelected ? '#FAFAFA' : '#FAFAFA66',
      backgroundColor: isSelected ? '#34387F' : 'transparent',
      width: 'calc( 100vw /2 - 28px)',
  
      borderRadius: '100px',
      padding: '14px 24px',
      lineHeight: '18px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '14px',
      fontWeight: '400',
  
      outline: 'none',
      border: '1px solid #34387F',
      boxShadow: 'none',
      '@media only screen and (min-width:500px)':{
        width: 'calc( 100vw /3 - 28px)',
      },
      '@media only screen and (min-width:768px)':{
        width:'149px',
        fontSize: '16px',
        padding: '16px 24px',
      }
    }),
    valueContainer: styles => ({
      ...styles,
      padding: 0,
    }),
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? '#FAFAFA;' : '#FAFAFA66',
  
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '14px',
      cursor: 'pointer',
      backgroundColor: 'none',
      padding: '0 0 8px 0',
      transition: 'all 200ms ease',
      '&:hover': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: '#F3F3F3',
        transform: 'scale(1.15) translateX(10px)',
      },
      '@media only screen and (min-width:1440px)':{
        fontSize: '16px',
        lineHeight: '18px',
        '&:hover': {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: '#F3F3F3',
          transform: 'scale(1.1) translateX(15px)',
        },
      }

    }),
    menu: styles => ({
      ...styles,
      top: '47px',
      backgroundColor: '#171717',
      padding: '16px 0px 16px 24px',
      borderRadius: '16px',
      border: 'none',
      boxShadow: 'px 4px 36px 0px rgba(0, 0, 0, 0.02)',
      
    }),
    menuList: styles => ({
      ...styles,
      gap: '8px',
      boxSizing: 'content-box',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
     
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (styles, state) => ({
      ...styles,
      padding: 0,
      color: '#FAFAFA',
      transition: 'all .2s ease',
      cursor: 'pointer',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
    placeholder: (styles, state) => ({
      ...styles,
      color: '#FAFAFA',
    }),
  };
  