import { Box, Typography, Avatar, Rating } from '@mui/material'
import avatarImage from '~/assets/img/tutor-profile-page/avatar.png'
import { styles } from '~/components/offer-card/offer-card-square/offer-card-rectangle/OfferCardRectangle.styles'

const UserProfile = () => {
  return (
    <Box sx={styles.leftColumn}>
      <Avatar src={avatarImage} sx={styles.avatar} />
      <Typography color='primary.500' fontWeight='500' variant='subtitle1'>
        Jennifer W.
      </Typography>
      <Box alignItems='center' display='flex' gap={1} sx={styles.rating}>
        <Rating name='read-only' readOnly size='small' value={5} />
        <Typography variant='body2'>5</Typography>
      </Box>
      <Typography sx={styles.ratingCaption} variant='caption'>
        10 reviews
      </Typography>
    </Box>
  )
}

export default UserProfile
