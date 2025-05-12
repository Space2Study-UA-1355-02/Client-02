import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Grid, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'

import { authRoutes } from '~/router/constants/authRoutes'
import CategoryCard from '~/components/category-card/CategoryCard'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import { CategoryInterface } from '~/types'
import { styles } from '~/containers/student-home-page/faq/Faq.styles'

interface CategoryCardsListProps {
  hideTexts?: boolean
  items: CategoryInterface[]
}

const CategoryCardsList: React.FC<CategoryCardsListProps> = ({
  hideTexts,
  items
}) => {
  const [showAll, setShowAll] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const isOnCategoriesPage = location.pathname === authRoutes.categories.path

  const visibleCategories: CategoryInterface[] = isOnCategoriesPage
    ? showAll
      ? items
      : items.slice(0, 9)
    : items.slice(0, 6)

  return (
    <Box sx={{ mt: 1 }}>
      {!hideTexts && !isOnCategoriesPage && (
        <TitleWithDescription
          description={t('studentHomePage.popularCategories.description')}
          style={styles.titleWithDescription}
          title={t('studentHomePage.popularCategories.title')}
        />
      )}

      <Grid container spacing={3}>
        {visibleCategories.map((item) => (
          <Grid item key={item._id} md={4} sm={6} xs={12}>
            <CategoryCard {...item} />
          </Grid>
        ))}
      </Grid>

      {!isOnCategoriesPage && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            onClick={() => navigate(authRoutes.categories.path)}
            variant='outlined'
          >
            {t('studentHomePage.popularCategories.showAllCategories')}
          </Button>
        </Box>
      )}

      {isOnCategoriesPage && !showAll && items.length > 12 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button onClick={() => setShowAll(true)} variant='outlined'>
            {t('studentHomePage.popularCategories.viewMore')}
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default CategoryCardsList
