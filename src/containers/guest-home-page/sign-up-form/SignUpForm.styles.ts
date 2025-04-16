export const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: { sm: '340px' }
  },
  firstRow: {
    display: 'flex',
    gap: '16px'
  },
  input: {
    maxWidth: '343px'
  },
  signUpButton: {
    width: '100%',
    py: '14px'
  },
  agreement: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'primary.900',
    '&:hover': {
      textDecoration: 'underline'
    },
    '&:focus': {
      outline: '2px solid',
      borderRadius: '2px'
    },
    alignSelf: 'end'
  }
}
