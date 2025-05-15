import { Box, Avatar, Typography, IconButton } from '@mui/material'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import LanguageIcon from '@mui/icons-material/Language'

import avatar from '~/assets/img/tutor-profile-page/default-avatar.png'

import { styles } from '~/components/offer-card/offer-card-square/OfferCardSquare.styles'

const UserProfileSquare = ({
  name,
  spokenLanguages = 'English',
  onAddToWishlist
}) => {
  return (
    <Box sx={styles.topRow}>
      <Box sx={styles.profileLeft}>
        <Avatar src={avatar} sx={styles.avatar} />
        <Box sx={styles.nameSection}>
          <Typography sx={styles.name} variant='subtitle1'>
            {name}
          </Typography>
          <Box sx={styles.languages}>
            <LanguageIcon fontSize='small' />
            <Typography sx={styles.spokenLanguages} variant='body2'>
              {spokenLanguages}
            </Typography>
          </Box>
        </Box>
      </Box>
      <IconButton onClick={onAddToWishlist} sx={styles.bookMark}>
        <BookmarkBorderIcon />
      </IconButton>
    </Box>
  )
}

export default UserProfileSquare
