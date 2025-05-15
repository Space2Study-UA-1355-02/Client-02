import { lightGreen } from '@mui/material/colors'

export const styles = {
  card: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 2,
    borderRadius: 3,
    boxShadow: 4,
    my: 4
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%'
  },
  profileLeft: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    minWidth: 0
  },
  avatar: {
    width: 74,
    height: 74,
    border: '2px solid',
    borderRadius: '50%'
  },
  nameSection: {
    flexGrow: 1,
    mx: 2
  },
  name: {
    fontWeight: '500',
    color: 'primary.500'
  },
  languages: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    marginTop: 1,
    color: 'primary.300'
  },
  spokenLanguages: {
    color: 'primary.400',
    fontWeight: '400'
  },
  bookMark: {
    color: 'primary.900',
    alignSelf: 'flex-start'
  },
  middle: {
    textAlign: 'left'
  },
  title: {
    align: 'left',
    color: 'primary.700',
    marginBottom: '20px'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 2,
    marginTop: '20px',
    marginBottom: '10px'
  },
  label: {
    color: 'primary.300',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    fontWeight: 500
  },
  subject: {
    backgroundColor: lightGreen[300],
    borderRadius: '10px',
    textTransform: 'uppercase',
    padding: '5px 15px',
    fontSize: '12px',
    letterSpacing: '1px',
    fontWeight: '600',
    color: 'primary.600'
  },
  level: {
    backgroundColor: lightGreen[100],
    borderRadius: '10px',
    textTransform: 'uppercase',
    padding: '5px 15px',
    fontSize: '12px',
    letterSpacing: '1px',
    fontWeight: '500',
    color: 'primary.500'
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  ratingBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  },
  ratingInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'right'
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5
  },
  ratingNumber: {
    fontSize: '1.75rem',
    fontWeight: 400,
    lineHeight: 1
  },
  reviews: {
    color: 'primary.300',
    textTransform: 'uppercase',
    fontWeight: '400',
    marginTop: 0.25,
    letterSpacing: 1.5
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1
  },
  buttonSendMessage: {
    backgroundColor: 'primary.50',
    color: 'primary.800',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: 'primary.100',
      border: 'none'
    },
    border: 'none'
  }
}
