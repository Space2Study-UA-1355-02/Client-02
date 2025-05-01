export const styles = {
  root: {
    m: { xs: '100px 10px', sm: '56px', md: '40px 10px' }
  },
  img: { display: 'block', margin: '0 auto 16px auto' },
  titleWithDescription: {
    wrapper: {
      maxWidth: '630px',
      textAlign: 'center',
      '&& .MuiTypography-root': {
        // Double & increases specificity
        margin: '12px 0' // Now overrides margin: 0
      },
      '&& .MuiTypography-h5': {
        // For titles
        marginBottom: '12px'
      },
      '&& .MuiTypography-body1': {
        // For descriptions
        marginTop: '12px'
      }
    },
    title: {
      typography: 'h5'
    },
    description: {
      typography: 'subtitle1'
    }
  }
}
