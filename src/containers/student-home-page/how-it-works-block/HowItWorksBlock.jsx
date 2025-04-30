import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { howItWorksCards } from '../student-how-it-works/HowItWorksCards'
import HowItWorksCard from '~/components/how-it-works-card/HowItWorksCard'
import { styles } from '../how-it-works-block/HowItWorksBlock.style'

const HowItWorksBlock = () => {
  return (
    <Box sx={styles.container}>
      <Typography gutterBottom sx={styles.title} variant='h4'>
        How it works
      </Typography>
      <Typography paragraph sx={styles.description} variant='body1'>
        4 steps to easy and funny learning with Space2Study
      </Typography>
      <Grid container justifyContent='center' spacing={1}>
        {howItWorksCards.map((card, index) => (
          <Grid item key={index} md={3} sm={6} xs={12}>
            <HowItWorksCard card={card} />
          </Grid>
        ))}
      </Grid>
      <Box>
        <Button sx={styles.button} variant='contained'>
          Find Tutor
        </Button>
      </Box>
    </Box>
  )
}

export default HowItWorksBlock
