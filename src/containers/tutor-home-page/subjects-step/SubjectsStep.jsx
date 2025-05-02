import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import AppButton from '~/components/app-button/AppButton'
import { ButtonVariantEnum } from '~/types'

import { styles } from '~/containers/tutor-home-page/subjects-step/SubjectsStep.styles'
import { categoriesMock } from '~/containers/tutor-home-page/subjects-step/constants'

const SubjectsStep = ({ btnsBox }) => {
  const { t } = useTranslation()
  const [mainCategory, setMainCategory] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [subjects, setSubjects] = useState([])

  const addSubject = () => {
    if (!selectedSubject) {
      alert(t('becomeTutor.categories.emptyFields'))
      return
    }

    const isDuplicate = subjects.some((s) => s.name === selectedSubject.name)
    if (isDuplicate) {
      alert(t('becomeTutor.categories.sameSubject'))
      return
    }

    setSubjects([...subjects, { name: selectedSubject.name }])
    setSelectedSubject(null)
  }

  const displayedSubjects = subjects.slice(0, 2)
  const hiddenCount = subjects.length - displayedSubjects.length

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

          <AppButton onClick={addSubject} variant={ButtonVariantEnum.Outlined}>
            {t('becomeTutor.categories.btnText')}
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
            {hiddenCount > 0 && <Chip label={`+${hiddenCount}`} />}
          </Stack>

          {btnsBox}
        </Stack>
      </Box>
    </Box>
  )
}

export default SubjectsStep
