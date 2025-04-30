import { Link } from 'react-router-dom'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'

type CategoryCardProps = {
  categoryId: string
  icon: SvgIconComponent
  title: string
  offersCount: number
  cardStyles?: object
  iconBgColor?: string
  iconColor?: string
}

const CategoryCard = ({
  categoryId,
  icon: Icon,
  title,
  offersCount,
  cardStyles,
  iconBgColor = '#e5f4ea',
  iconColor = '#4CAF50'
}: CategoryCardProps) => {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={`/subjects?category=${categoryId}`}
    >
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          borderRadius: 3,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)'
          },
          ...cardStyles
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: iconBgColor,
            marginRight: 2
          }}
        >
          <Icon sx={{ fontSize: 30, color: iconColor }} />
        </Box>
        <CardContent sx={{ padding: 0 }}>
          <Typography sx={{ fontWeight: 600, color: '#2E3A59' }} variant='h6'>
            {title}
          </Typography>
          <Typography
            sx={{ color: '#607D8B', fontWeight: 500 }}
            variant='body2'
          >
            {offersCount} Offers
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CategoryCard
