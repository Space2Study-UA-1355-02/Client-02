import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Typography, Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

import useUpload from '~/hooks/use-upload'
import { style } from '~/containers/tutor-home-page/add-photo-step/AddPhotoStep.style'

const AddPhotoStep = ({ btnsBox, onErrorChange }) => {
  const { t } = useTranslation()
  const [imagePreview, setImagePreview] = useState(null)
  const [fileError, setFileError] = useState('')
  const prevErrorRef = useRef(false)

  const MAX_SIZE_MB = 10

  const validateFile = (file) => {
    if (!file) return 'required'
    if (file.size > MAX_SIZE_MB * 1024 * 1024) return 'size'
    if (!file.type.startsWith('image/')) return 'type'
    return ''
  }

  const { dragStart, dragLeave, isDrag } = useUpload({
    files: [],
    validationData: {},
    emitter: ({ files: updatedFiles, error }) => {
      if (error) {
        setFileError(error)
        if (imagePreview) URL.revokeObjectURL(imagePreview)
        setImagePreview(null)
        return
      }

      const file = updatedFiles?.[0]
      if (file) {
        if (imagePreview) URL.revokeObjectURL(imagePreview)
        const fileURL = URL.createObjectURL(file)
        setImagePreview(fileURL)
        setFileError('')
      }
    }
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const error = validateFile(file)
    setFileError(error)
    if (file && !error) {
      if (imagePreview) URL.revokeObjectURL(imagePreview)
      const fileURL = URL.createObjectURL(file)
      setImagePreview(fileURL)
    } else {
      if (imagePreview) URL.revokeObjectURL(imagePreview)
      setImagePreview(null)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    const error = validateFile(file)
    setFileError(error)
    if (file && !error) {
      if (imagePreview) URL.revokeObjectURL(imagePreview)
      const fileURL = URL.createObjectURL(file)
      setImagePreview(fileURL)
    } else {
      if (imagePreview) URL.revokeObjectURL(imagePreview)
      setImagePreview(null)
    }
  }

  const handleDelete = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview)
    setImagePreview(null)
    setFileError('required')
  }

  useEffect(() => {
    const hasError =
      fileError === 'size' ||
      fileError === 'type' ||
      fileError === 'required' ||
      !imagePreview

    if (hasError !== prevErrorRef.current) {
      onErrorChange?.(hasError)
      prevErrorRef.current = hasError
    }
  }, [fileError, imagePreview, onErrorChange])

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview)
    }
  }, [imagePreview])

  return (
    <Box sx={style.root}>
      <Box sx={style.imgContainer}>
        <Box
          onDragLeave={dragLeave}
          onDragOver={(e) => {
            e.preventDefault()
            dragStart(e)
          }}
          onDrop={handleDrop}
          sx={{
            ...style.uploadBox,
            position: 'relative',
            ...(isDrag && style.activeDrag)
          }}
        >
          {imagePreview ? (
            <>
              <Box
                alt='Preview'
                component='img'
                src={imagePreview}
                sx={style.img}
              />
              <IconButton
                aria-label='delete'
                onClick={handleDelete}
                sx={style.deleteButton}
              >
                <DeleteIcon />
              </IconButton>
            </>
          ) : (
            <Typography sx={style.photoPreviewText}>
              {t('becomeTutor.photo.placeholder')}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={style.rightBox}>
        <Typography sx={style.description}>
          {t('becomeTutor.photo.description')}
        </Typography>

        <Button
          component='label'
          startIcon={<CloudUploadIcon />}
          sx={style.uploadButton}
          variant='contained'
        >
          {t('becomeTutor.photo.button')}
          <input
            accept='image/*'
            hidden
            onChange={handleFileChange}
            type='file'
          />
        </Button>

        <Typography
          sx={{
            ...style.fileSizeText,
            color: fileError === 'size' ? 'error.main' : 'text.secondary'
          }}
          variant='caption'
        >
          {t('errorMessages.fileSize', { size: '10 MB' })}
        </Typography>

        <Box sx={style.buttonsContainer}>{btnsBox}</Box>
      </Box>
    </Box>
  )
}

export default AddPhotoStep
