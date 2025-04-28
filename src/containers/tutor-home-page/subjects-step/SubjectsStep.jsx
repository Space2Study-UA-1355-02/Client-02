import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Button from '@mui/material/Button'

import AppButton from '~/components/app-button/AppButton'
import { ButtonVariantEnum } from '~/types'

import { styles } from '~/containers/tutor-home-page/subjects-step/SubjectsStep.styles'
import { categoriesMock } from '~/containers/tutor-home-page/subjects-step/constants'
import { categories } from '~/constants/translations/en/become-tutor.json'

const SubjectsStep = ({ btnsBox }) => {
  const [mainCategory, setMainCategory] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [subjects, setSubjects] = useState([])
  const [showAllSubjects, setShowAllSubjects] = useState(false)

  const isAddDisabled =
    !selectedSubject || subjects.some((s) => s.name === selectedSubject.name)

  const addSubject = () => {
    if (isAddDisabled) return

    setSubjects([...subjects, { name: selectedSubject.name }])
    setSelectedSubject(null)
  }

  const displayedSubjects = showAllSubjects ? subjects : subjects.slice(0, 2)
  const hiddenCount = subjects.length - 2

  const toggleShowAll = () => {
    setShowAllSubjects((prev) => !prev)
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.rigthBox}>
        <Stack spacing={2}>
          <Typography variant='body1'>{categories.title}</Typography>
          <Autocomplete
            fullWidth
            getOptionLabel={(option) => option.name}
            onChange={(_, newValue) => setMainCategory(newValue)}
            options={categoriesMock}
            renderInput={(params) => (
              <TextField
                {...params}
                label={categories.mainSubjectsLabel}
                variant='outlined'
              />
            )}
            value={mainCategory}
          />

          <Autocomplete
            fullWidth
            getOptionLabel={(option) => option.name}
            onChange={(_, newValue) => setSelectedSubject(newValue)}
            options={categoriesMock}
            renderInput={(params) => (
              <TextField
                {...params}
                label={categories.subjectLabel}
                variant='outlined'
              />
            )}
            value={selectedSubject}
          />

          <AppButton
            disabled={isAddDisabled}
            onClick={addSubject}
            variant={ButtonVariantEnum.Outlined}
          >
            {categories.btnText}
          </AppButton>

          <Stack direction='row' flexWrap='wrap' spacing={1}>
            {displayedSubjects.map((subject, index) => (
              <Chip
                key={index}
                label={subject.name}
                onDelete={() =>
                  setSubjects(subjects.filter((s) => s.name !== subject.name))
                }
              />
            ))}

            {hiddenCount > 0 && !showAllSubjects && (
              <Chip
                clickable
                icon={<ArrowDropDownIcon />}
                label={`+${hiddenCount}`}
                onClick={toggleShowAll}
              />
            )}

            {showAllSubjects && (
              <Button
                onClick={toggleShowAll}
                startIcon={<ArrowDropUpIcon />}
                sx={{
                  fontSize: '14px',
                  padding: '6px 16px',
                  textTransform: 'none'
                }}
                variant='outlined'
              >
                Згорнути
              </Button>
            )}
          </Stack>

          {btnsBox}
        </Stack>
      </Box>
    </Box>
  )
}

export default SubjectsStep
