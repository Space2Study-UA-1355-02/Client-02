import { Box, Typography, IconButton, Button } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { styles } from '~/components/offer-card/offer-card-square/offer-card-rectangle/OfferCardRectangle.styles'

const PriceSection = ({ onOpenMessage }) => {
  return (
    <>
      <Box sx={styles.topRight}>
        <Box>
          <Typography color='primary.800' fontWeight='400' variant='h6'>
            75 UAH
          </Typography>
          <Typography color='primary.600' variant='caption'>
            /HOUR
          </Typography>
        </Box>
        <IconButton color='primary.800'>
          <BookmarkBorderIcon />
        </IconButton>
      </Box>
      <Box sx={styles.buttons}>
        <Button variant='contained'>Show details</Button>
        <Button
          onClick={onOpenMessage}
          sx={styles.buttonSendMessage}
          variant='contained'
        >
          Send message
        </Button>
      </Box>
    </>
  )
}

export default PriceSection
