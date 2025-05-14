import React, { useCallback, useMemo, useState } from 'react'

import PageWrapper from '~/components/page-wrapper/PageWrapper'

import CategoryCardsList from '~/containers/categories-page/category-cards-list/CategoryCardsList'
import SearchCategories from '~/containers/categories-page/search-categories/SearchCategories'
import OfferRequestBlock from '~/containers/find-offer/offer-request-block/OfferRequestBlock'

import useBreakpoints from '~/hooks/use-breakpoints'
import useLoadMore from '~/hooks/use-load-more'

import { itemsLoadLimit } from '~/constants'
import { categoryService } from '~/services/category-service'
import { CategoriesParams, CategoryInterface } from '~/types'
import { getScreenBasedLimit } from '~/utils/helper-functions'

const Categories: React.FC = () => {
  const [match, setMatch] = useState<string>('')
  const params = useMemo(() => ({ name: match }), [match])
  const breakpoints = useBreakpoints()
  const cardsLimit = getScreenBasedLimit(breakpoints, itemsLoadLimit)

  const getCategories = useCallback(
    (params?: Partial<CategoriesParams>) =>
      categoryService.getCategories(params),
    []
  )

  const { data, loading, resetData, loadMore, isExpandable } = useLoadMore<
    CategoryInterface,
    Partial<CategoriesParams>
  >({
    service: getCategories,
    limit: cardsLimit,
    params
  })

  return (
    <PageWrapper>
      <OfferRequestBlock />

      <SearchCategories
        resetData={resetData}
        setValue={setMatch}
        value={match}
      />
      <CategoryCardsList
        isExpandable={isExpandable}
        items={data}
        loadMore={loadMore}
        loading={loading}
      />
    </PageWrapper>
  )
}

export default Categories
