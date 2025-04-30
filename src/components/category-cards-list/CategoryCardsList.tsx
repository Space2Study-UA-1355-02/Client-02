import LanguageIcon from '@mui/icons-material/Language'
import FunctionsIcon from '@mui/icons-material/Functions'
import { Box, Grid } from '@mui/material'
import CategoryCard from '~/components/category-card/CategoryCard'

const CategoryCardsList = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <CategoryCard
            categoryId='languages'
            icon={LanguageIcon}
            iconBgColor='#e5f4ea'
            iconColor='#4CAF50'
            offersCount={234}
            title='Languages'
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <CategoryCard
            categoryId='math'
            icon={FunctionsIcon}
            iconBgColor='#fff3cd'
            iconColor='#ffb300'
            offersCount={234}
            title='Mathematics'
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CategoryCardsList
