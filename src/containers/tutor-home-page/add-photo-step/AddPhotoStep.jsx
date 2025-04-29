import { Box, Typography, Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useState, useEffect } from 'react'
import useUpload from '~/hooks/use-upload'
import { validationData } from './constants'
import { style } from '~/containers/tutor-home-page/add-photo-step/AddPhotoStep.style'

const AddPhotoStep = ({ btnsBox }) => {
  const [files, setFiles] = useState([])
  const [imagePreview, setImagePreview] = useState(null)

  // Clean up object URLs
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
      // Revoke previous URL if exists
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
      // Revoke previous URL if exists
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
      const fileURL = URL.createObjectURL(file)
      setImagePreview(fileURL)
      addFiles(e)
    }
  }

  const handleDelete = () => {
    setImagePreview(null) // Clear the image preview
    setFiles([]) // Optionally clear the file list
  }

  return (
    <Box sx={style.root}>
      {/* Left Block for Drag-and-Drop */}
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
              {/* Delete Button on Image Preview */}
              <IconButton
                aria-label='delete'
                onClick={handleDelete}
                sx={style.deleteButton}
              >
                <DeleteIcon />
              </IconButton>
            </>
          ) : (
            <Typography sx={style.photoPreviewText}>Photo Preview</Typography>
          )}
        </Box>
      </Box>

      {/* Right Block with Text and File Input */}
      <Box sx={style.rightBox}>
        {/* Description Text */}
        <Typography sx={style.description}>
          Upload a photo of yourself to complete your profile. A clear, friendly
          picture helps others recognize and connect with you!
        </Typography>

        {/* File Upload Button with MUI Button and VisuallyHiddenInput */}
        <Button
          component='label'
          role={undefined}
          startIcon={<CloudUploadIcon />}
          sx={style.uploadButton}
          tabIndex={-1}
          variant='contained'
        >
          Upload your profile photo
          <input
            accept='image/*'
            hidden
            onChange={handleFileChange}
            type='file'
          />
        </Button>

        {/* Maximum File Size Text */}
        <Typography sx={style.fileSizeText} variant='caption'>
          Maximum file size - 10 Mb
        </Typography>

        {/* Buttons: Back and Next */}
        <Box sx={style.buttonsContainer}>{btnsBox}</Box>
      </Box>
    </Box>
  )
}

export default AddPhotoStep
