import styled, {withTheme} from 'styled-components'
import UploaderComponent from './ImageUploader.jsx'

export const ImageUploader = withTheme(styled(UploaderComponent)`
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
  .button-container {
    display: flex;
    justify-content: flex-end;
    padding: 0px 20px;
    box-sizing: border-box;
    button {
      height: 20px;
      border: none;
      margin-right: 10px;
      &.btn-primary {
        background-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.inverse};
      }
      &.btn-secondary {
        background-color: ${({theme}) => theme.colors.secondary};
      }
    }
  }
`)
