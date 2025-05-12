export const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    p: 4,
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow transform 0.5s ease',
    '&:hover': {
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.01)'
    }
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 2,
    mr: 2
  },
  content: {
    p: 0,
    '&:last-child': {
      paddingBottom: 0
    },
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title: {
    fontWeight: 500
  }
}
