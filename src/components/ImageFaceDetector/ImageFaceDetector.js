import styled from 'styled-components'
import ImageFaceDetectorComponent from './ImageFaceDetector.jsx'

export const ImageFaceDetector = styled(ImageFaceDetectorComponent)`
  height: 300px;
  width: 100%;
  position: relative;
  img {
  }
  .detector {
    content: "asdad";
    position: absolute;
    border: 2px solid blue;
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    top: ${({top}) => top}px;
    left: ${({left}) => left}px;
  }
`
