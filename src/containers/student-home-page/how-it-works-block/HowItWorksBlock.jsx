import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { howItWorksCards } from '~/containers/student-home-page/student-how-it-works/HowItWorksCards'
import HowItWorksCard from '~/components/how-it-works-card/HowItWorksCard'
import { authRoutes } from '~/router/constants/authRoutes'
import { styles } from '~/containers/student-home-page/how-it-works-block/HowItWorksBlock.style'
import { useTranslation } from 'react-i18next'

const HowItWorksBlock = () => {
  const { t } = useTranslation()

  return (
    <Box id='how-it-works' sx={styles.container}>
      <Typography gutterBottom sx={styles.title} variant='h4'>
        {t('studentHomePage.howItWorks.title')}
      </Typography>
      <Typography paragraph sx={styles.description} variant='body1'>
        {t('studentHomePage.howItWorks.description')}
      </Typography>
      <Grid container justifyContent='center' spacing={1}>
        {howItWorksCards.map((card, index) => (
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
          {t('studentHomePage.findTutorBlock.button')}
        </Button>
      </Box>
    </Box>
  )
}

export default HowItWorksBlock
