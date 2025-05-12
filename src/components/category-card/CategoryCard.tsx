import { Card, Typography, Box, SxProps } from '@mui/material'
import { CategoryInterface } from '~/types'
import { icons } from '~/components/_icons/icons'

import {
  cardStyles as defaultCardStyles,
  iconBoxStyles,
  iconStyles,
  titleStyles,
  offersCountStyles
} from './categoryCardStyles'
import { useTranslation } from 'react-i18next'

interface CategoryCardsProps extends CategoryInterface {
  bgColor?: string
  offerText?: string
  cardStyles?: SxProps
}

const CategoryCard: React.FC<CategoryCardsProps> = ({
  bgColor,
  name,
  appearance,
  totalOffers,
  offerText,
  cardStyles
}) => {
  const { t } = useTranslation()
  const Icon: React.ElementType = icons[appearance.icon]

  return (
    <Card sx={{ ...defaultCardStyles, ...cardStyles }}>
      <Box sx={iconBoxStyles(bgColor ? bgColor : `${appearance.color}60`)}>
        <Icon sx={iconStyles(appearance.color)} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography sx={titleStyles} variant='subtitle1'>
          {name}
        </Typography>
        <Typography sx={offersCountStyles} variant='body2'>
          {totalOffers.student} {offerText ? offerText : t('offers')}
        </Typography>
      </Box>
    </Card>
  )
}

export default CategoryCard
