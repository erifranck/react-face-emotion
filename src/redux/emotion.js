import {detectFace as detectFaceRequest} from 'service/microsoftFace'
import {uploadImage} from 'service/imgur'

const SAVE = 'apiface/emotion/SAVE'
const SAVE_SUCCESS = 'apiface/emotion/SAVE_SUCCESS'
const SAVE_FAIL = 'apiface/emotion/SAVE_FAIL'
const DETECT_FACE = 'apiface/emotion/DETECT_FACE'
const DETECT_FACE_SUCCESS = 'apiface/emotion/DETECT_FACE_SUCCESS'
const DETECT_FACE_FAIL = 'apiface/emotion/DETECT_FACE_FAIL'

const INITIAL_STATE = {
  loading: false,
  data: undefined,
  uploadImage: undefined,
  error: undefined
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        loading: true
      }
    case SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadImage: action.response.data
      }
    case SAVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case DETECT_FACE:
      return {
        ...state,
        loading: true
      }
    case DETECT_FACE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.response
      }
    case DETECT_FACE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export const saveImage = (img) => (dispatch, getState) => {
  const clientId = getState().settings.data['client id'].value
  dispatch({
    type: SAVE
  })
  uploadImage(img, clientId)
    .then(response => {
      dispatch({
        type: SAVE_SUCCESS,
        response: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: SAVE_FAIL,
        error
      })
    })
}

export const detectFace = (img) => (dispatch, getState) => {
  const apiKey = getState().settings.data['subscription key'].value
  dispatch({
    type: DETECT_FACE
  })
  detectFaceRequest(img, apiKey)
    .then(response => {
      dispatch({
        type: DETECT_FACE_SUCCESS,
      })
      response: response.data
    })
    .catch(error => {
      dispatch({
        type: DETECT_FACE_FAIL,
        error
      })
    })
}
