export const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    p: { xs: 2, sm: 3 }
  },
  title: {
    fontWeight: 'bold',
    mb: 1,
    textAlign: 'center',
    variant: 'h5'
  },
  subtitle: {
    mb: 2,
    textAlign: 'center',
    variant: 'body2'
  },
  linksContainer: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    mb: 2,
    width: '100%'
  },
  linkContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    mb: { xs: 1, sm: 0 }
  },
  link: {
    textDecoration: 'none',
    color: '#607D8B',
    fontWeight: 500
  },
  arrowForward: {
    color: '#607D8B',
    marginLeft: 8
  },
  toolbar: {
    borderRadius: 3,
    p: 2,
    width: '100%'
  },
  toolbarItemsContainer: {
    alignItems: 'center'
  },
  searchInputContainer: {
    alignItems: 'center',
    display: 'flex',
    width: '100%'
  },
  searchInput: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none'
      }
    }
  },
  searchButton: {
    backgroundColor: '#607D8B',
    '&:hover': {
      backgroundColor: '#455A64'
    }
  },
  bottomText: {
    mt: 2,
    textAlign: 'center'
  },
  bottomTextLink: {
    textDecoration: 'none',
    fontWeight: 500,
    color: 'inherit'
  }
}
