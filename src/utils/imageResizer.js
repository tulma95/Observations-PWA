import Resizer from 'react-image-file-resizer'

const resizeImage = (image, setFile) => {
  Resizer.imageFileResizer(
    image,
    180,
    180,
    'png',
    100,
    0,
    uri => {
      setFile(uri)
    },
    'base64'
  )
}

export default resizeImage
