import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'

const GeneralInfoStep = ({ btnsBox }) => {
  const countries = ['USA', 'Canada', 'UK']
  const cities = ['New York', 'Toronto', 'London']
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    description: '',
    confirmAge: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  return (
    <>
      <Typography variant='body1'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </Typography>
      <Box sx={styles.inputs}>
        <TextField
          fullWidth
          label='First Name'
          name='firstName'
          onChange={handleChange}
          required
          value={form.firstName}
        />
        <TextField
          fullWidth
          label='Last Name'
          name='lastName'
          onChange={handleChange}
          required
          value={form.lastName}
        />
      </Box>
      <Box sx={styles.inputs}>
        <TextField
          fullWidth
          label='Country'
          name='country'
          onChange={handleChange}
          select
          value={form.country}
        >
          {countries.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label='City'
          name='city'
          onChange={handleChange}
          select
          value={form.city}
        >
          {cities.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <TextField
        fullWidth
        helperText={`${form.description.length}/200`}
        inputProps={{ maxLength: 200 }}
        label='Describe in short your professional status'
        multiline
        name='description'
        onChange={handleChange}
        rows={3}
        value={form.description}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={form.confirmAge}
            name='confirmAge'
            onChange={handleChange}
          />
        }
        label='I confirm that I am over 18 years old'
      />

      <Typography sx={styles.assign} variant='caption'>
        Inputs with the * sign are required
      </Typography>
      <Box sx={styles.container}>{btnsBox}</Box>
    </>
  )
}

export default GeneralInfoStep
