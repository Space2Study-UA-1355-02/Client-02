import { Box, Typography, Divider } from '@mui/material'

import { styles } from '~/components/offer-card/offer-card-square/OfferCardSquare.styles'

const CourseDetailsSquare = ({
  title = 'Advanced Quantum Mechanics: Theoretical Mathematics...',
  subject = 'Ukrainian',
  level = 'Beginner - Professional'
}) => {
  return (
    <Box sx={styles.middle}>
      <Typography gutterBottom sx={styles.title} variant='h6'>
        {title}
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Box sx={styles.infoRow}>
        <Typography sx={styles.label}>Subject:</Typography>
        <Typography sx={styles.subject} variant='body2'>
          {subject}
        </Typography>
      </Box>
      <Box sx={{ ...styles.infoRow, mt: 1 }}>
        <Typography sx={styles.label}>Level:</Typography>
        <Typography sx={styles.level} variant='body2'>
          {level}
        </Typography>
      </Box>
    </Box>
  )
}

export default CourseDetailsSquare
