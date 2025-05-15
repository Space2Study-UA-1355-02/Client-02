import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import { Box, SxProps, Theme, Typography } from '@mui/material'

import AppCard from '~/components/app-card/AppCard'
import { IconComponent, IconName, icons } from '~/components/_icons/icons'

import { authRoutes } from '~/router/constants/authRoutes'
import { CategoryInterface } from '~/types'

import { styles } from './categoryCard.styles'

interface CategoryCardsProps extends CategoryInterface {
  bgColor?: string
  offerText?: string
  sx?: SxProps<Theme>
}

const CategoryCard: React.FC<CategoryCardsProps> = ({
  _id,
  bgColor,
  name,
  appearance,
  totalOffers,
  offerText,
  sx
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const Icon: IconComponent = icons[appearance.icon as IconName]

  const handleClick = () =>
    navigate(`${authRoutes.subjects.path}?categoryId=${_id}`)

  return (
    <AppCard onClick={handleClick} sx={{ ...styles.card, ...sx }}>
      <Box sx={styles.iconBox(bgColor ? bgColor : `${appearance.color}60`)}>
        <Icon sx={styles.icon(appearance.color)} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography sx={styles.title} variant='subtitle1'>
          {name}
        </Typography>
        <Typography sx={styles.offersCount} variant='body2'>
          {totalOffers.student} {offerText ? offerText : t('offers')}
        </Typography>
      </Box>
    </AppCard>
  )
}

export default CategoryCard
