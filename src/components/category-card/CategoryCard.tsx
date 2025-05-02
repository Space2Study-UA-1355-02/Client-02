// import { Link } from 'react-router-dom' // TODO: активувати, коли зʼявиться роутинг
import { Card, Typography, Box } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'

import {
  cardStyles as defaultCardStyles,
  iconBoxStyles,
  iconStyles,
  titleStyles,
  offersCountStyles
} from './categoryCardStyles'

type CategoryCardProps = {
  categoryId: string
  icon: SvgIconComponent
  title: string
  offersCount: number
  cardStyles?: object
  iconBgColor?: string
  iconColor?: string
  offerText?: string
}

const CategoryCard = ({
  // categoryId,
  icon: Icon,
  title,
  offersCount,
  cardStyles,
  iconBgColor = '#e5f4ea',
  iconColor = '#4CAF50',
  offerText = 'Offers'
}: CategoryCardProps) => {
  return (
    // TODO: обгорнути в <Link to={`/subjects?category=${categoryId}`}> коли буде роутинг
    // cardContent
    <Card sx={{ ...defaultCardStyles, ...cardStyles }}>
      <Box sx={iconBoxStyles(iconBgColor)}>
        <Icon sx={iconStyles(iconColor)} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography sx={titleStyles} variant='subtitle1'>
          {title}
        </Typography>
        <Typography sx={offersCountStyles} variant='body2'>
          {offersCount} {offerText}
        </Typography>
      </Box>
    </Card>
    // </Link>
  )
}

export default CategoryCard
