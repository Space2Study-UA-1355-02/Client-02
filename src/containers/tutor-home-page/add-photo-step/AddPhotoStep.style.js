//Add pphoto step container styles

import { fadeAnimation } from '~/styles/app-theme/custom-animations'
import { alpha } from '@mui/material/styles'

export const style = {
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    gap: '40px',
    height: { sm: '485px' },
    paddingBottom: { sm: '210px', md: '0px' },
    ...fadeAnimation,
    alignItems: 'flex-start',
    boxSizing: 'border-box'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
    mt: { xs: '20px', md: '0px' }
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '440px',
    width: '100%',
    flex: 1,
    pb: { xs: '16px', sm: '26px', md: '52px' },
    position: 'relative'
  },
  uploadBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '440px',
    width: '100%',
    aspectRatio: '1',
    border: '2px dashed',
    borderColor: 'primary.200',
    borderRadius: '20px',
    mt: { xs: '20px', md: '0px' }
  },
  activeDrag: {
    border: '2px solid',
    borderColor: 'primary.900'
  },
  photoPreviewText: {
    color: 'primary.600'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '440px',
    width: '100%',
    flex: 1,
    //height: '100%',
    m: { md: 0, xs: '0 auto' },
    pt: 0,
    pb: { xs: '30px', sm: '0' }
    //gap: '20px'
  },
  description: {
    mb: '20px',
    fontSize: '14px',
    lineHeight: '1.3'
  },
  fileUploader: {
    button: {
      textAlign: 'center'
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      border: '1px solid',
      borderColor: 'primary.200',
      borderRadius: '5px',
      maxWidth: '270px',
      overflow: 'auto'
    }
  },
  fileSizeText: {
    marginTop: '10px',
    color: 'primary.700',
    marginBottom: '20px'
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '200px',
    padding: '0',
    boxSizing: 'border-box'
  },
  uploadButton: {
    backgroundColor: 'white',
    color: 'primary.600',
    border: '1px solid',
    borderColor: 'primary.300',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'normal',
    maxWidth: '250px',
    width: '100%',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'primary.100',
      borderColor: 'primary.500'
    }
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: (theme) => alpha(theme.palette.primary[100], 0.5),
    '&:hover': {
      backgroundColor: (theme) => alpha(theme.palette.primary[100], 0.8)
    }
  }
}
