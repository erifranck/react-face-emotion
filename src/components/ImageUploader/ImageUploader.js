import styled from 'styled-components'
import UploaderComponent from './ImageUploader.jsx'

export const ImageUploader = styled(UploaderComponent)`
  width: 400px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: auto;
  }
  input[type=file] {
    position: absolute;
    top: 0px;
    opacity: 0;
    left: 0px;
    height: 100%;
    width: 100%;
  }
`
