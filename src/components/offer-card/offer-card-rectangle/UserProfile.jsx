import { Box, Typography, Avatar, Rating } from '@mui/material'
import { styles } from '~/components/offer-card/offer-card-rectangle/OfferCardRectangle.styles'

const UserProfile = ({
  name = 'Jennifer W.',
  avatarSrc = '/src/assets/img/tutor-profile-page/avatar.png',
  rating = 5,
  reviewCount = 10
}) => {
  return (
    <Box sx={styles.leftColumn}>
      <Avatar src={avatarSrc} sx={styles.avatar} />
      <Typography color='primary.500' fontWeight='500' variant='subtitle1'>
        {name}
      </Typography>
      <Box alignItems='center' display='flex' gap={1} sx={styles.rating}>
        <Rating name='read-only' readOnly size='small' value={5} />
        <Typography variant='body2'>{rating}</Typography>
      </Box>
      <Typography sx={styles.ratingCaption} variant='caption'>
        {reviewCount} reviews
      </Typography>
    </Box>
  )
}

export default UserProfile
