import React, { useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import CardsList from '~/components/cards-list/CardsList'
import CategoryCard from '~/components/category-card/CategoryCard'
import NotFoundResults from '~/components/not-found-results/NotFoundResults'
import { CreateRequest } from '~/containers/find-offer/create-request/CreateRequest'
import { useModalContext } from '~/context/modal-context'
import { CategoryInterface } from '~/types'

interface ListProps {
  items: CategoryInterface[]
  loading: boolean
  loadMore: () => void
  isExpandable: boolean
}

const CategoryCardsList: React.FC<ListProps> = ({
  items,
  loading,
  loadMore,
  isExpandable
}) => {
  const { t } = useTranslation()
  const { openModal } = useModalContext()

  const handleOpenModal = () => openModal({ component: <CreateRequest /> })

  const cards = useMemo(
    () =>
      items.map((item: CategoryInterface) => {
        return <CategoryCard {...item} key={item._id} />
      }),
    [items]
  )

  if (!items.length && !loading) {
    return (
      <NotFoundResults
        buttonText={t('errorMessages.buttonRequest', {
          name: t('categoriesPage.category')
        })}
        description={t('errorMessages.tryAgainText', {
          name: t('categoriesPage.category')
        })}
        onClick={handleOpenModal}
      />
    )
  } else {
    return (
      <CardsList
        btnText={t('categoriesPage.viewMore')}
        cards={cards}
        isExpandable={isExpandable}
        loading={loading}
        onClick={loadMore}
      />
    )
  }
}

export default CategoryCardsList
