import React from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'

import DirectionLink from '~/components/direction-link/DirectionLink'
import SearchFilterInput from '~/components/search-filter-input/SearchFilterInput'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { styles } from '~/containers/student-categories-page/search-categories/SearchCategories.styles'
import { authRoutes } from '~/router/constants/authRoutes'
import Typography from '@mui/material/Typography'
import AppButton from '~/components/app-button/AppButton'
import useBreakpoints from '~/hooks/use-breakpoints'

interface SearchCategoriesProps {
  onSearch: (value: string) => void
}

const SearchCategories: React.FC<SearchCategoriesProps> = ({ onSearch }) => {
  const { t } = useTranslation()
  const { isMobile } = useBreakpoints()

  return (
    <Box sx={styles.container}>
      <TitleWithDescription
        description={t('categoriesPage.description')}
        style={styles.titleWithDescription}
        title={t('categoriesPage.title')}
      />
      <DirectionLink
        after={<ArrowForwardIcon />}
        linkTo={authRoutes.subjects.path}
        title={t('categoriesPage.showAllOffers')}
      />
      <SearchFilterInput
        customStyles={styles.search}
        textFieldProps={{ placeholder: t('categoriesPage.searchLabel') }}
        updateFilter={onSearch}
      />
      {!isMobile && (
        <Typography sx={styles.hint}>
          {t('categoriesPage.cantFind')}{' '}
          <AppButton sx={styles.button} variant={'text'}>
            {t('categoriesPage.category')}
          </AppButton>{' '}
          {t('categoriesPage.or')}{' '}
          <AppButton sx={styles.button} variant={'text'}>
            {t('categoriesPage.subject')}
          </AppButton>
        </Typography>
      )}
    </Box>
  )
}

export default SearchCategories
