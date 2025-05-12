import { useTranslation } from 'react-i18next'

import { Box, Typography, Rating, Button } from '@mui/material'

import { styles } from '~/components/offer-card/offer-card-square/OfferCardSquare.styles'

const PriceSectionSquare = ({
  price = 75,
  rating = '5.0',
  reviewCount = 23,
  onOpenMessage
}) => {
  const { t } = useTranslation()
  return (
    <>
      <Box sx={styles.bottomRow}>
        <Box>
          <Box sx={styles.priceRow}>
            <Typography color='primary.800' fontWeight='500' variant='h6'>
              {price}
            </Typography>
            <Typography
              color='primary.800'
              fontWeight='500'
              sx={{ marginLeft: '4px' }}
              variant='h6'
            >
              {t('common.uah')}
            </Typography>
          </Box>
          <Typography color='primary.600' fontWeight='400' variant='caption'>
            / {t('common.hour')}
          </Typography>
        </Box>
        <Box sx={styles.ratingBox}>
          <Box sx={styles.ratingInner}>
            <Box sx={styles.ratingRow}>
              <Rating
                max={1}
                name='read-only'
                readOnly
                size='large'
                value={rating > 0 ? 1 : 0}
              />
              <Typography sx={styles.ratingNumber} variant='h6'>
                {rating}
              </Typography>
            </Box>
            <Typography sx={styles.reviews} variant='caption'>
              {reviewCount} {t('common.reviews')}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.buttons}>
        <Button variant='contained'>{t('common.labels.viewDetails')}</Button>
        <Button
          onClick={onOpenMessage}
          sx={styles.buttonSendMessage}
          variant='outlined'
        >
          {t('common.labels.sendMessage')}
        </Button>
      </Box>
    </>
  )
}

export default PriceSectionSquare
