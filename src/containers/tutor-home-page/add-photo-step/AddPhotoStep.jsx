import { Box, Typography, Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import useUpload from '~/hooks/use-upload'
import { validationData } from './constants'
import { style } from '~/containers/tutor-home-page/add-photo-step/AddPhotoStep.style'

const AddPhotoStep = ({ btnsBox }) => {
  const { t } = useTranslation()
  const [files, setFiles] = useState([])
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const { dragStart, dragLeave, addFiles, isDrag } = useUpload({
    files,
    validationData,
    emitter: ({ files: updatedFiles, error }) => {
      if (error) {
        console.log(error)
      }
      setFiles(updatedFiles)
    }
  })
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
      const fileURL = URL.createObjectURL(file)
      setImagePreview(fileURL)
      addFiles(e)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
      const fileURL = URL.createObjectURL(file)
      setImagePreview(fileURL)
      addFiles(e)
    }
  }

  const handleDelete = () => {
    setImagePreview(null)
    setFiles([])
  }

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
            ...(isDrag && style.activeDrag),
            position: 'relative'
          }}
        >
          {imagePreview ? (
            <>
              <Box
                alt='Profile preview'
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
          role={undefined}
          startIcon={<CloudUploadIcon />}
          sx={style.uploadButton}
          tabIndex={-1}
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

        <Typography sx={style.fileSizeText} variant='caption'>
          {t('errorMessages.fileSize', { size: '10 MB' })}
        </Typography>

        <Box sx={style.buttonsContainer}>{btnsBox}</Box>
      </Box>
    </Box>
  )
}

export default AddPhotoStep
