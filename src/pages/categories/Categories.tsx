import PageWrapper from '~/components/page-wrapper/PageWrapper'
import NotFoundResults from '~/components/not-found-results/NotFoundResults'
import SearchCategories from '~/containers/student-categories-page/search-categories/SearchCategories'

import CategoryCardsList from '~/components/category-cards-list/CategoryCardsList'
import { allCategories } from '~/components/category-cards-list/category'

const Categories = () => {
  const categories: any[] = []
  return (
    <PageWrapper>
      <SearchCategories onSearch={() => {}} />
      {categories.length ? (
        <div>Category</div>
      ) : (
        <>
          <NotFoundResults
            buttonText={'Request a new category'}
            description={
              "We couldn't find what you were searching for. Please try again or suggest a new category that you were looking for."
            }
          />
          <CategoryCardsList hideTexts items={allCategories} />
        </>
      )}
    </PageWrapper>
  )
}

export default Categories
