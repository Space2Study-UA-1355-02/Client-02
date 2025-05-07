import { FC } from 'react'
import { Grid, Box } from '@mui/material'
import AppButton from '~/components/app-button/AppButton'
import { ButtonVariantEnum, SubjectInterface } from '~/types'
import { ListOfSubjectsCard } from '~/components/list-of-subjects-card/ListOfSubjectsCard'
import NotFoundResults from '~/components/not-found-results/NotFoundResults'

import { styles } from '~/components/list-of-subjects/ListOfSubjects.styles'

interface ListOfSubjectProps {
  items: SubjectInterface[]
  onClick?: () => void
}

export const ListOfSubjects: FC<ListOfSubjectProps> = ({ onClick, items }) => {
  return (
    <Box sx={styles.container}>
      {items.length ? (
        <>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item key={item._id} lg={3} md={4} sm={6} xs={12}>
                <ListOfSubjectsCard
                  _id={item._id}
                  category={item.category}
                  createdAt={item.createdAt}
                  name={item.name}
                  totalOffers={item.totalOffers}
                  updatedAt={item.updatedAt}
                />
              </Grid>
            ))}
          </Grid>

          <AppButton
            onClick={onClick}
            sx={styles.button}
            variant={ButtonVariantEnum.Tonal}
          >
            View more
          </AppButton>
        </>
      ) : (
        <NotFoundResults
          description={
            "We couldn't find what you were searching for. Please try again."
          }
        />
      )}
    </Box>
  )
}
