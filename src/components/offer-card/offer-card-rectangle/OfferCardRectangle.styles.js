import { lightGreen } from '@mui/material/colors'

export const styles = {
  card: {
    p: { xs: 1, sm: 2, md: 3 },
    borderRadius: 3,
    boxShadow: 3,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    mb: { xs: 4, sm: 5 },
    overflowX: 'hidden'
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1
  },
  avatar: {
    width: 94,
    height: 94,
    border: '2px solid',
    color: 'primary.600',
    borderRadius: '50%'
  },
  ratingCaption: {
    color: 'primary.400',
    fontWeight: '400',
    textAlign: 'left'
  },
  rating: {
    backgroundColor: 'primary.50',
    borderRadius: '3px',
    padding: '2px 3px',
    color: 'primary.600'
  },
  headings: {
    fontWeight: '500',
    color: 'primary.500'
  },
  subheadings: {
    display: 'flex',
    gap: 1,
    marginBottom: 1,
    color: 'primary.700'
  },
  subheadingsLanguage: {
    backgroundColor: lightGreen[300],
    borderRadius: '10px',
    textTransform: 'uppercase',
    padding: '5px 15px',
    fontSize: '12px',
    letterSpacing: '1px',
    fontWeight: '600',
    color: 'primary.600'
  },
  subheadingsLevel: {
    backgroundColor: lightGreen[100],
    borderRadius: '10px',
    textTransform: 'uppercase',
    padding: '5px 15px',
    fontSize: '12px',
    letterSpacing: '1px',
    fontWeight: '500',
    color: 'primary.500'
  },
  description: {
    color: 'primary.500',
    fontWeight: '400'
  },
  languages: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    marginTop: 1,
    color: 'primary.300'
  },
  topRight: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  buttons: {
    mt: 3,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    flexWrap: 'wrap'
  },
  buttonSendMessage: {
    backgroundColor: 'primary.50',
    color: 'primary.800',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: 'primary.100'
    }
  }
}
