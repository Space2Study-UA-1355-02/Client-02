import React, { useCallback, useMemo, useState } from 'react'

import { Box } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import AppToolbar from '~/components/app-toolbar/AppToolbar'
import AsyncAutocomplete from '~/components/async-autocomlete/AsyncAutocomplete'
import DirectionLink from '~/components/direction-link/DirectionLink'
import OffersContainer from '~/components/offers-container/OffersContainer'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import SearchAutocomplete from '~/components/search-autocomplete/SearchAutocomplete'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import OfferRequestBlock from '~/containers/find-offer/offer-request-block/OfferRequestBlock'

import useBreakpoints from '~/hooks/use-breakpoints'
import useLoadMore from '~/hooks/use-load-more'

import { itemsLoadLimit } from '~/constants'
import { styles } from '~/pages/subjects/Subjects.styles'
import { authRoutes } from '~/router/constants/authRoutes'
import { categoryService } from '~/services/category-service'
import { offerService } from '~/services/offer-service'
import { subjectService } from '~/services/subject-service'
import {
  CategoryNameInterface,
  OffersParams,
  SizeEnum,
  SubjectNameInterface
} from '~/types'
import { getScreenBasedLimit } from '~/utils/helper-functions'
import { FiltersButton } from '~/components/filter-button/FilterButton'
import { Switcher } from '~/components/switcher/Switcher'
import { SortSelect } from '~/components/sort-select/SortSelect'
import ViewSwitcher from '~/components/view-switcher/ViewSwitcher'

const FindOffers = () => {
  const { t } = useTranslation()
  const [isGrid, setIsGrid] = useState(false)
  const [match, setMatch] = useState<string>('')
  const params = useMemo(() => ({ search: match }), [match])
  const breakpoints = useBreakpoints()
  const cardsLimit = getScreenBasedLimit(breakpoints, itemsLoadLimit)
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryId = searchParams.get('categoryId') ?? ''
  const subjectId = searchParams.get('subjectId') ?? ''
  const [sort, setSort] = useState('')

  const getOffers = useCallback(
    (params?: Partial<OffersParams>) => offerService.getOffers(params),
    []
  )

  const { data, loading, resetData } = useLoadMore({
    service: getOffers,
    limit: cardsLimit,
    params
  })

  const onCategoryChange = (
    _: React.SyntheticEvent,
    value: CategoryNameInterface | null
  ) => {
    searchParams.set('categoryId', value?._id ?? '')
    searchParams.set('subjectId', '')
    setSearchParams(searchParams)
    resetData()
  }

  const autoCompleteCategories = (
    <AsyncAutocomplete
      labelField='name'
      onChange={onCategoryChange}
      service={categoryService.getCategoriesNames}
      sx={styles.categoryInput}
      textFieldProps={{
        label: t('breadCrumbs.categories')
      }}
      value={categoryId}
      valueField='_id'
    />
  )

  const onSubjectChange = (
    _: React.SyntheticEvent,
    value: SubjectNameInterface | null
  ) => {
    searchParams.set('subjectId', value?._id ?? '')
    setSearchParams(searchParams)
    resetData()
  }

  const autoCompleteSubjects = (
    <AsyncAutocomplete
      labelField='name'
      onChange={onSubjectChange}
      service={subjectService.getSubjectsNames}
      sx={styles.categoryInput}
      textFieldProps={{
        label: t('breadCrumbs.subjects')
      }}
      value={subjectId}
      valueField='_id'
    />
  )

  return (
    <PageWrapper>
      <OfferRequestBlock />

      <TitleWithDescription
        description={t('findOffers.titleWithDescription.description')}
        style={styles.titleWithDescription}
        title={t('findOffers.titleWithDescription.title')}
      />

      <Box sx={styles.navigation}>
        <DirectionLink
          before={<ArrowBackIcon fontSize={SizeEnum.Small} />}
          linkTo={authRoutes.categories.path}
          title={t('subjectsPage.subjects.backToAllCategories')}
        />
      </Box>
      <AppToolbar sx={styles.searchToolbar}>
        {!breakpoints.isMobile && autoCompleteCategories}
        {!breakpoints.isMobile && autoCompleteSubjects}
        <SearchAutocomplete
          onSearchChange={resetData}
          options={[]}
          search={match}
          setSearch={setMatch}
          textFieldProps={{
            label: t('subjectsPage.subjects.searchLabel')
          }}
        />
      </AppToolbar>
      {breakpoints.isMobile && autoCompleteCategories}
      {breakpoints.isMobile && autoCompleteSubjects}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <FiltersButton activeCount={0} onClick={() => {}} />
        <Switcher
          onChange={() => {}}
          switchOptionLeft={t('findOffers.topMenu.tutorsOffers')}
          switchOptionRight={t('findOffers.topMenu.studentsRequests')}
        />
        <SortSelect onChange={setSort} value={sort} />
        <ViewSwitcher
          isGrid={isGrid}
          setIsGrid={() => setIsGrid((prev) => !prev)}
        />
      </Box>

      <OffersContainer isGrid={isGrid} loading={loading} offers={data} />
    </PageWrapper>
  )
}

export default FindOffers
