export const styles = {
  container: {
    padding: '5px',
    textAlign: 'center'
  },
  title: {
    marginBottom: '20px'
  },
  description: {
    color: 'primary.600',
    paragraph: true,
    variant: 'body1'
  },
  button: {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: (theme) => theme.palette.common.black,
    color: (theme) => theme.palette.common.white,
    '&:hover': {
      backgroundColor: (theme) => theme.palette.primary[600],
      boxShadow: (theme) => `0 4px 8px ${theme.palette.grey[300]}80`
    }
  }
}
