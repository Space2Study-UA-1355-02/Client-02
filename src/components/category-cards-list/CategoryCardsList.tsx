import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Grid, Button, Typography } from '@mui/material'
import {
  allCategories,
  Category
} from '~/components/category-cards-list/category'

import CategoryCard from '~/components/category-card/CategoryCard'

const CategoryCardsList = () => {
  const [showAll, setShowAll] = useState(false)
  const { t } = useTranslation()

  const visibleCategories: Category[] = showAll
    ? allCategories
    : allCategories.slice(0, 6)

  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography fontWeight='bold' gutterBottom variant='h4'>
          {t('studentHomePage.popularCategories.title')}
        </Typography>
        <Typography color='text.secondary' variant='body1'>
          {t('studentHomePage.popularCategories.description')}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {visibleCategories.map((cat) => (
          <Grid item key={cat.categoryId} md={4} sm={6} xs={12}>
            <CategoryCard {...cat} />
          </Grid>
        ))}
      </Grid>

      {!showAll && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button onClick={() => setShowAll(true)} variant='contained'>
            {t('studentHomePage.popularCategories.viewMore')}
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default CategoryCardsList
