import { Grid, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { howItWorksCardsTutor } from '~/containers/tutor-home-page/tutor-how-it-works/HowItWorksCardsTutor'
import HowItWorksCard from '~/components/how-it-works-card/HowItWorksCard'
import { authRoutes } from '~/router/constants/authRoutes'
import { styles } from '~/containers/student-home-page/how-it-works-block/HowItWorksBlock.style'
import { useTranslation } from 'react-i18next'

const HowItWorksBlockTutor = () => {
  const { t } = useTranslation()

  return (
    <Box id='how-it-works' sx={styles.container}>
      <Typography gutterBottom sx={styles.title} variant='h4'>
        {t('tutorHomePage.howItWorks.title')}
      </Typography>
      <Typography paragraph sx={styles.description} variant='body1'>
        {t('tutorHomePage.howItWorks.description')}
      </Typography>
      <Grid container justifyContent='center' spacing={1}>
        {howItWorksCardsTutor.map((card, index) => (
          <Grid item key={index} md={3} sm={6} xs={12}>
            <HowItWorksCard card={card} />
          </Grid>
        ))}
      </Grid>
      <Box>
        <Button
          component={Link}
          sx={styles.button}
          to={authRoutes.findOffers.path}
          variant='contained'
        >
          {t('tutorHomePage.findStudentBlock.button')}
        </Button>
      </Box>
    </Box>
  )
}

export default HowItWorksBlockTutor
