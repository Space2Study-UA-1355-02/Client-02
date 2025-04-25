import { fadeAnimation } from '~/styles/app-theme/custom-animations'

export const style = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    height: '100%',
    minHeight: '0',
    paddingBottom: '0px',
    ...fadeAnimation
    //overflow: 'hidden'
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
    pb: { xs: '16px', sm: '26px', md: '52px' }
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
    mt: { xs: '20px', md: '0px' },
    overflow: 'hidden',
    padding: '10px'
  },
  activeDrag: {
    borderColor: 'primary.900'
  },
  photoPreviewText: {
    color: 'primary.600'
  },
  rightBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '450px',
    height: 'auto',
    paddingTop: '0',
    paddingLeft: '10px',
    paddingRight: '0px',
    paddingBottom: '0px'
  },
  leftBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box'
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
  fileInputBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: 'grey.100',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'primary.300'
  },
  uploadText: {
    fontSize: '16px'
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
    marginTop: '200px'
  },
  uploadButton: {
    backgroundColor: 'white',
    color: 'primary.600',
    border: '1px solid',
    borderColor: 'primary.300',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'normal',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'primary.100',
      borderColor: 'primary.500'
    }
  }
}
