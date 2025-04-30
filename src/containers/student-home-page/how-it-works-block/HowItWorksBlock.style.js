export const styles = {
  container: {
    padding: '25px',
    textAlign: 'center',
    backgroundColor: '#FCFFFB',
    borderRadius: '20px'
  },
  title: {
    marginBottom: '20px'
  },
  description: {
    color: 'primary.900',
    paragraph: true,
    variant: 'body1'
  },
  button: {
    display: 'inline-block',
    width: 'auto',
    margin: '10px auto',
    padding: '20px 30px',
    fontSize: '16px',
    backgroundColor: 'primary.700',
    color: (theme) => theme.palette.common.white,
    '&:hover': {
      backgroundColor: (theme) => theme.palette.primary[600],
      boxShadow: (theme) => `0 4px 8px ${theme.palette.grey[300]}80`
    }
  }
}
