import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
const STORAGE_KEY = 'subjectsStepForm'
const SubjectsStep = ({ btnsBox, onSubjectsChange }) => {
  const { t } = useTranslation()

  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')

  const [mainCategory, setMainCategory] = useState(
    savedForm.mainCategory || null
  )
  const [selectedSubject, setSelectedSubject] = useState(
    savedForm.selectedSubject || null
  )
  const [subjects, setSubjects] = useState(savedForm.subjects || [])
  const [showAllSubjects, setShowAllSubjects] = useState(false)

  useEffect(() => {
    const formState = { mainCategory, selectedSubject, subjects }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState))
  }, [mainCategory, selectedSubject, subjects])

  const isAddDisabled =
    !selectedSubject || subjects.some((s) => s.name === selectedSubject.name)

  const updateSubjects = (newSubjects) => {
    setSubjects(newSubjects)
    if (typeof onSubjectsChange === 'function') {
      onSubjectsChange(newSubjects)
    }
  }

  const addSubject = () => {
    if (isAddDisabled || !selectedSubject) return
    const updated = [...subjects, { name: selectedSubject.name }]
    updateSubjects(updated)
    setSelectedSubject(null)
  }

  const removeSubject = (name) => {
    const updated = subjects.filter((s) => s.name !== name)
    updateSubjects(updated)
  }

  const toggleShowAll = () => setShowAllSubjects((prev) => !prev)

  const displayedSubjects = showAllSubjects ? subjects : subjects.slice(0, 2)
  const hiddenCount = subjects.length - 2

  return (
    <Box sx={styles.container}>
      <Box sx={styles.rigthBox}>
        <Stack spacing={2}>
          <Typography variant='body1'>
            {t('becomeTutor.categories.title')}
          </Typography>

          <Autocomplete
            fullWidth
            getOptionLabel={(option) => option.name}
            onChange={(_, newValue) => setMainCategory(newValue)}
            options={categoriesMock}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t('becomeTutor.categories.mainSubjectsLabel')}
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
                label={t('becomeTutor.categories.subjectLabel')}
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
            {t('becomeTutor.categories.btnText')}
          </AppButton>

          <Stack direction='row' flexWrap='wrap' spacing={1}>
            {displayedSubjects.map((subject, index) => (
              <Chip
                key={`${subject.name}-${index}`}
                label={subject.name}
                onDelete={() => removeSubject(subject.name)}
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
                {t('becomeTutor.categories.collapse')}
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
