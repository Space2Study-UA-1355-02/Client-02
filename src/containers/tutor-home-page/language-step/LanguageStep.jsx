import React, { useState } from 'react'
import Box from '@mui/material/Box'

import { styles } from '~/containers/tutor-home-page/language-step/LanguageStep.styles'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { languagesMock } from '~/containers/tutor-home-page/subjects-step/constants'
const LanguageStep = ({ btnsBox }) => {
  const [form, setForm] = useState({
    nativeLang: 'Ukrainian'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Typography variant='body1'>
        Velit officia consequat duis enim velit mollit. Other categories you can
        add in your account settings later.
      </Typography>
      <Box sx={styles.inputs}>
        <TextField
          fullWidth
          label='Your native language'
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
