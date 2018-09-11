import styled from 'styled-components'
import UploaderComponent from './ImageUploader.jsx'

export const ImageUploader = styled(UploaderComponent)`
  width: 400px;
  height: 400px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: auto;
  }
`
