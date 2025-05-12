import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

import { styles } from '~/containers/tutor-home-page/language-step/LanguageStep.styles'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { languagesMock } from '~/containers/tutor-home-page/subjects-step/constants'
const LanguageStep = ({ btnsBox }) => {
  const { t } = useTranslation()
  const [form, setForm] = useState(() => {
    const savedForm = localStorage.getItem('languageStepForm')
    return savedForm
      ? JSON.parse(savedForm)
      : {
          nativeLang: 'Ukrainian'
        }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newForm = {
      ...form,
      [name]: value
    }
    setForm(newForm)
    localStorage.setItem('languageStepForm', JSON.stringify(newForm))
  }

  return (
    <>
      <Typography variant='body1'>
        {t('becomeTutor.languages.title')}
      </Typography>
      <Box sx={styles.inputs}>
        <TextField
          fullWidth
          label={t('becomeTutor.languages.autocompleteLabel')}
          name='nativeLang'
          onChange={handleChange}
          select
          value={form.nativeLang}
        >
          {languagesMock.map((lang) => (
            <MenuItem key={lang.name} value={lang.name}>
              {lang.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {btnsBox}
    </>
  )
}

export default LanguageStep
