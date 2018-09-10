import styled, {withTheme} from 'styled-components'
import FormComponent from './Form.jsx'

export const Form = withTheme(styled(FormComponent)`
  height: 100%;
  width: 100%;
  position: relative;
  input {
    height: 40px;
    width: 100%;
    padding: 10px;
    margin: 15px 0px;
    box-sizing: border-box;
  }
  h3 {
    margin: 10px 0px;
    text-align: center;
    text-transform: uppercase;
    color: ${({theme}) => theme ? theme.colors.primary : '#000' };
  }
  button {
    position: absolute;
    height: 40px;
    border: none;
    color: ${({theme}) => theme ? theme.colors.inverse : '#000' };
    right: 0;
    bottom: 0;
    background-color: ${({theme}) => theme ? theme.colors.primary : 'transparent'};
  }
`)
