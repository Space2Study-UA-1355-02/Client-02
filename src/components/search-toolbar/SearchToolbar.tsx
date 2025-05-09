import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Button
} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

import { styles } from './SearchToolbar.styles'

type Option = {
  label: string
  value: string
}

interface SearchToolbarProps {
  title: string
  subtitle: string
  isBackLink: boolean
  placeholder?: string
  categoryOptions?: Option[]
  subjectOptions?: Option[]
  backLink?: string
  backLinkText?: string
  isShowAllLink: boolean
  showAllLink?: string
  showAllText?: string
  onSearch: (query: {
    text: string
    category?: string
    subject?: string
  }) => void
}

export const SearchToolbar: FC<SearchToolbarProps> = ({
  title,
  subtitle,
  isBackLink,
  placeholder = 'What would you like to learn?',
  backLink,
  backLinkText,
  showAllLink,
  showAllText,
  isShowAllLink,
  categoryOptions,
  subjectOptions,
  onSearch
}) => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const [subject, setSubject] = useState('')

  const handleSearch = () => {
    onSearch({ text, category, subject })
  }

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title} variant={'h5'}>
        {title}
      </Typography>
      <Typography sx={styles.subtitle} variant={'body2'}>
        {subtitle}
      </Typography>

      <Stack direction={'row'} sx={styles.linksContainer}>
        {isBackLink && backLink ? (
          <Box sx={styles.linkContainer}>
            <ArrowBackOutlinedIcon
              style={{ color: '#607D8B', marginRight: 8 }}
            />
            <Link
              style={{
                textDecoration: 'none',
                color: '#607D8B',
                fontWeight: 500
              }}
              to={backLink}
            >
              {backLinkText}
            </Link>
          </Box>
        ) : (
          <Box />
        )}
        {showAllLink && isShowAllLink && (
          <Box sx={styles.linkContainer}>
            <Link style={styles.link} to={showAllLink}>
              {showAllText}
            </Link>
            <ArrowForwardOutlinedIcon style={styles.arrowForward} />
          </Box>
        )}
      </Stack>

      <Box bgcolor='white' sx={styles.toolbar}>
        <Grid container spacing={2} sx={styles.toolbarItemsContainer}>
          {categoryOptions && (
            <Grid item sm={2} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  label='Category'
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  {categoryOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}

          {subjectOptions && (
            <Grid item sm={2} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Subject</InputLabel>
                <Select
                  label='Subject'
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                >
                  {subjectOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}

          <Grid item sm xs={12}>
            <Box sx={styles.searchInputContainer}>
              <SearchOutlinedIcon sx={{ mr: 1 }} />
              <TextField
                fullWidth
                onChange={(e) => setText(e.target.value)}
                placeholder={placeholder}
                sx={styles.searchInput}
                value={text}
                variant='outlined'
              />
            </Box>
          </Grid>

          <Grid item sm='auto' xs={12}>
            <Button
              fullWidth
              onClick={handleSearch}
              sx={styles.searchButton}
              variant='contained'
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Typography sx={styles.bottomText} variant='caption'>
        Can’t find what you’re looking for? Request a new{' '}
        <Link style={styles.bottomTextLink} to='#'>
          category
        </Link>{' '}
        or{' '}
        <Link style={styles.bottomTextLink} to='#'>
          subject
        </Link>
        !
      </Typography>
    </Box>
  )
}
