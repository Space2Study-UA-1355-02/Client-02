import { Box, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { styles } from '~/components/offer-card/offer-card-square/offer-card-rectangle/OfferCardRectangle.styles'

const CourseDetails = () => {
  return (
    <>
      <Typography gutterBottom sx={styles.subheadings} variant='h6'>
        Advanced Quantum Mechanics: Theoretical Concepts, Mathematical
        Formulations in Modern Physics
      </Typography>
      <Box sx={styles.subheadings}>
        <Typography sx={styles.subheadingsLanguage} variant='body2'>
          German
        </Typography>
        <Typography sx={styles.subheadingsLevel} variant='body2'>
          Beginner - Advanced
        </Typography>
      </Box>
      <Typography mb={2} sx={styles.description} variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
        consectetur ex totam libero cum odit et, ullam corrupti corrupti
        corrupti doloribus optio esse reiciendis iusto fugit.
      </Typography>
      <Box sx={styles.languages}>
        <LanguageIcon fontSize='small' />
        <Typography variant='body2'>Ukrainian, English</Typography>
      </Box>
    </>
  )
}

export default CourseDetails
