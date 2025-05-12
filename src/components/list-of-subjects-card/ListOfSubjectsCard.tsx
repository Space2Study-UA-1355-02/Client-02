import React from 'react'
import { Avatar, Card, CardContent, Typography } from '@mui/material'
import { SubjectInterface } from '~/types'
import serviceIcon from '~/assets/img/find-offer/service_icon.png'

import { styles } from '~/components/list-of-subjects-card/ListOfSubjectsCards.styles'

export const ListOfSubjectsCard = ({ name, totalOffers }: SubjectInterface) => {
  return (
    <Card sx={styles.card} variant='outlined'>
      <Avatar src={serviceIcon} sx={styles.image} variant='square' />
      <CardContent sx={styles.content}>
        <Typography sx={styles.title} variant='subtitle2'>
          {name}
        </Typography>
        <Typography color='text.secondary' variant='body2'>
          {totalOffers.tutor} Offers
        </Typography>
      </CardContent>
    </Card>
  )
}
