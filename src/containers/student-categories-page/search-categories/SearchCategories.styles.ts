export const styles = {
  container: {
    width: '100%'
  },
  button: {
    p: 0,
    textDecoration: 'underline',
    color: 'inherit',
    backgroundColor: 'transparent'
  },
  hint: {
    mt: '30px',
    textAlign: 'center'
  },
  titleWithDescription: {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontWeight: 500,
      fontSize: '32px',
      letterSpacing: '0.25%',
      textAlign: 'center',
      paddingBottom: '8px'
    },
    description: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
      textAlign: 'center'
    }
  },
  search: {
    container: {
      maxHeight: '108px',
      px: { xs: '14px', sm: '30px', md: '45px' },
      py: { xs: '18px', sm: '20px', md: '30px' },
      boxSizing: 'border-box'
    },
    searchIcon: {
      display: { xs: 'none' }
    },
    searchBtn: {
      px: { xs: '14px' },
      py: { xs: '8px' },
      ml: { xs: '15px' }
    }
  }
}
