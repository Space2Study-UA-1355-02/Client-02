import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

import AppButton from '~/components/app-button/AppButton'
import AppToolbar from '~/components/app-toolbar/AppToolbar'
import DirectionLink from '~/components/direction-link/DirectionLink'
import SearchAutocomplete from '~/components/search-autocomplete/SearchAutocomplete'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { styles } from '~/containers/categories-page/search-categories/SearchCategories.styles'
import useBreakpoints from '~/hooks/use-breakpoints'
import useCategoriesNames from '~/hooks/use-categories-names'
import { authRoutes } from '~/router/constants/authRoutes'
import { CategoryNameInterface, SizeEnum } from '~/types'
import { mapArrayByField } from '~/utils/map-array-by-field'

interface SearchCategoriesProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  resetData: () => void
}

const SearchCategories: React.FC<SearchCategoriesProps> = ({
  value,
  setValue,
  resetData
}) => {
  const { t } = useTranslation()
  const { isMobile } = useBreakpoints()
  const [isFetched, setIsFetched] = useState<boolean>(false)

  const transform = useCallback(
    (data: CategoryNameInterface[]): string[] => mapArrayByField(data, 'name'),
    []
  )

  const { response, loading, fetchData } = useCategoriesNames({
    fetchOnMount: false,
    transform
  })

  const getCategoriesNames = () => {
    !isFetched && void fetchData()
    setIsFetched(true)
  }

  return (
    <Box sx={styles.container}>
      <TitleWithDescription
        description={t('categoriesPage.description')}
        style={styles.titleWithDescription}
        title={t('categoriesPage.title')}
      />

      <Box sx={styles.navigation}>
        <DirectionLink
          after={<ArrowForwardIcon fontSize={SizeEnum.Small} />}
          linkTo={authRoutes.subjects.path}
          title={t('categoriesPage.showAllOffers')}
        />
      </Box>
      <AppToolbar sx={styles.searchToolbar}>
        <SearchAutocomplete
          loading={loading}
          onFocus={getCategoriesNames}
          onSearchChange={resetData}
          options={response}
          search={value}
          setSearch={setValue}
          textFieldProps={{
            label: t('categoriesPage.searchLabel')
          }}
        />
      </AppToolbar>
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
