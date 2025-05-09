import { Box, Typography, IconButton, Button } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { styles } from '~/components/offer-card/offer-card-square/offer-card-rectangle/OfferCardRectangle.styles'
import { useTranslation } from 'react-i18next'

const PriceSection = ({ price = 75, onOpenMessage }) => {
  const { t } = useTranslation()
  return (
    <>
      <Box sx={styles.topRight}>
        <Box>
          <Typography color='primary.800' fontWeight='400' variant='h6'>
            {price} {t('common.uah')}
          </Typography>
          <Typography color='primary.600' variant='caption'>
            /{t('common.hour')}
          </Typography>
        </Box>
        <IconButton color='primary.800'>
          <BookmarkBorderIcon />
        </IconButton>
      </Box>
      <Box sx={styles.buttons}>
        <Button variant='contained'>{t('common.labels.viewDetails')}</Button>
        <Button
          onClick={onOpenMessage}
          sx={styles.buttonSendMessage}
          variant='contained'
        >
          {t('common.labels.sendMessage')}
        </Button>
      </Box>
    </>
  )
}

export default PriceSection
