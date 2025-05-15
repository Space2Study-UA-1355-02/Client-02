import React, { useCallback, useMemo } from 'react'

import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import CardsList from '~/components/cards-list/CardsList'
import CategoryCard from '~/components/category-card/CategoryCard'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { styles } from '~/containers/student-home-page/faq/Faq.styles'

import useAxios from '~/hooks/use-axios'
import useBreakpoints from '~/hooks/use-breakpoints'

import { itemsLoadLimit } from '~/constants'
import { authRoutes } from '~/router/constants/authRoutes'
import { categoryService } from '~/services/category-service'
import { CategoryInterface } from '~/types'
import { getScreenBasedLimit } from '~/utils/helper-functions'

const PopularCategoriesBlock = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const breakpoints = useBreakpoints()
  const cardsLimit = getScreenBasedLimit(breakpoints, itemsLoadLimit)

  const getCategories = useCallback(
    () => categoryService.getCategories({ limit: cardsLimit }),
    []
  )

  const { response, loading } = useAxios({
    service: getCategories,
    defaultResponse: { items: [], count: 0 }
  })

  const cards = useMemo(
    () =>
      response.items.map((item: CategoryInterface) => {
        return <CategoryCard {...item} key={item._id} />
      }),
    [response.items]
  )

  return (
    <Box sx={{ mt: 6 }}>
      <TitleWithDescription
        description={t('studentHomePage.popularCategories.description')}
        style={styles.titleWithDescription}
        title={t('studentHomePage.popularCategories.title')}
      />

      <CardsList
        btnText={t('studentHomePage.popularCategories.showAllCategories')}
        cards={cards}
        loading={loading}
        onClick={() => navigate(authRoutes.categories.path)}
      />
    </Box>
  )
}

export default PopularCategoriesBlock
