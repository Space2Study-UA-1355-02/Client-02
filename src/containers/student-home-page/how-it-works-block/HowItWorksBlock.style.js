export const styles = {
  container: {
    padding: '25px 0',
    textAlign: 'center',
    backgroundColor: '#FCFFFB',
    borderRadius: '20px',
    width: '100%',
    minHeight: '100px',
    display: 'block',
    margin: { xs: '20px 0', sm: '30px 0', md: '50px 0' }
  },
  title: {
    marginBottom: '20px'
  },
  description: {
    color: 'primary.900',
    paragraph: true,
    variant: 'body1',
    marginBottom: '15px',
    fontSize: { xs: '1rem', md: '1.1rem' }
  },
  button: {
    display: 'inline-block',
    width: 'auto',
    margin: '10px auto',
    padding: '15px 35px',
    fontSize: '16px',
    backgroundColor: 'primary.900',
    color: (theme) => theme.palette.common.white,
    '&:hover': {
      backgroundColor: (theme) => theme.palette.primary[600],
      boxShadow: (theme) => `0 4px 8px ${theme.palette.grey[300]}80`
    }
  }
}
