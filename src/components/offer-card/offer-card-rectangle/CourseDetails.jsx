import { Box, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { styles } from '~/components/offer-card/offer-card-rectangle/OfferCardRectangle.styles'

const CourseDetails = ({
  title,
  language,
  level,
  description,
  spokenLanguages
}) => {
  return (
    <>
      <Typography gutterBottom sx={styles.subheadings} variant='h6'>
        {title}
      </Typography>
      <Box sx={styles.subheadings}>
        <Typography sx={styles.subheadingsLanguage} variant='body2'>
          {language}
        </Typography>
        <Typography sx={styles.subheadingsLevel} variant='body2'>
          {level}
        </Typography>
      </Box>
      <Typography mb={2} sx={styles.description} variant='body2'>
        {description}
      </Typography>
      <Box sx={styles.languages}>
        <LanguageIcon fontSize='small' />
        <Typography variant='body2'>{spokenLanguages}</Typography>
      </Box>
    </>
  )
}

export default CourseDetails
