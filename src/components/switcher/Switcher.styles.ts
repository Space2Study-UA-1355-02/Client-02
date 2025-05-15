export const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '30px',
    transition: 'all 0.2s ease'
  },
  customSwitch: {
    border: '1px solid #CFD8DC',
    borderRadius: '30px',
    maxHeight: '100%',
    transition: 'all 0.3s ease',
    '& .MuiSwitch-switchBase': {
      color: 'black',
      height: '100%',
      '&.Mui-checked': {
        color: 'black'
      },
      '&.Mui-checked + .MuiSwitch-track': {
        backgroundColor: 'white'
      }
    },
    '& .MuiSwitch-track': {
      backgroundColor: 'white'
    }
  }
}
