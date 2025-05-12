import LanguageIcon from '@mui/icons-material/Language'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'
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
            icon={Grid3x3Icon}
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
