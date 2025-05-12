import PageWrapper from '~/components/page-wrapper/PageWrapper'

import CategoryCardsList from '~/components/category-cards-list/CategoryCardsList'
import { allCategories } from '~/components/category-cards-list/category'

import SearchCategories from '~/containers/student-categories-page/search-categories/SearchCategories'

const Categories = () => {
  return (
    <PageWrapper>
      <SearchCategories onSearch={() => {}} />
      <CategoryCardsList hideTexts items={allCategories} />
    </PageWrapper>
  )
}

export default Categories
